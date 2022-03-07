import {
  Resolver,
  Query,
  Parent,
  ResolveField,
  Subscription,
  Args,
  Int,
  Mutation,
} from '@nestjs/graphql';
import { ProductWatchTimeService } from './product-watch-time.service';
import { ProductWatchTime } from './entities/product-watch-time.entity';
import { CreateProductWatchTimeInput } from './dto/create-product-watch-time.input';
import { UpdateProductWatchTimeInput } from './dto/update-product-watch-time.input';
import { UserWatchTime } from 'src/user-watch-time/entities/user-watch-time.entity';
import { UserWatchTimeService } from 'src/user-watch-time/user-watch-time.service';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { PubSub } from 'graphql-subscriptions';

export const pubSub = new PubSub(); // Stands for Publish and subscribe

@Resolver(() => ProductWatchTime)
export class ProductWatchTimeResolver {
  constructor(
    private readonly productWatchTimeService: ProductWatchTimeService,
    private readonly userWatchTimeService: UserWatchTimeService,
    private readonly productsService: ProductsService,
  ) {}

  @Query(() => [ProductWatchTime], { name: 'productWatchTimes' })
  findAll() {
    return this.productWatchTimeService.findAll();
  }

  @ResolveField((returns) => [UserWatchTime])
  async user_watch_times(
    @Parent() userWatchTime: UserWatchTime,
  ): Promise<UserWatchTime[]> {
    return await this.userWatchTimeService.findUserWatchTimes(
      userWatchTime.product_id,
    );
  }

  @Mutation(() => UserWatchTime)
  async addWatchTime(
    @Args('seconds', { type: () => Int }) seconds: number,
    @Args('user_id', { type: () => String }) user_id: string,
    @Args('product_id', { type: () => String }) product_id: string,
  ) {
    try {
      const userWatchTime = await this.userWatchTimeService.addUserWatchTime(
        user_id,
        seconds,
        product_id,
      );

      const product_watch_time =
        await this.productWatchTimeService.findByProductId(product_id);

      await pubSub.publish('userWatchTimeAdded', {
        userWatchTimeAdded: product_watch_time,
      });

      return userWatchTime;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  @Subscription((returns) => ProductWatchTime, { name: 'userWatchTimeAdded' })
  async userWatchTimeAdded() {
    // Update the ProductWatchTime
    // await this.productWatchTimeService.updateProductWatchTime()

    return pubSub.asyncIterator('userWatchTimeAdded');
  }
}
