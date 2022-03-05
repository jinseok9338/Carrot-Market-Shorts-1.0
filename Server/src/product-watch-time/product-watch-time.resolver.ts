import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
  Subscription,
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
import { getConnection } from 'typeorm';

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

  @ResolveField((returns) => UserWatchTime)
  user_watch_times(
    @Parent() userWatchTime: UserWatchTime,
  ): Promise<UserWatchTime[]> {
    return this.userWatchTimeService.findUserWatchTimes(userWatchTime.user_id);
  }

  @Subscription((returns) => ProductWatchTime, { name: 'userWatchTimeAdded' })
  async userWatchTimeAdded() {
    // Update the ProductWatchTime
    // await this.productWatchTimeService.updateProductWatchTime()
    return pubSub.asyncIterator('userWatchTimeAdded');
  }
}
