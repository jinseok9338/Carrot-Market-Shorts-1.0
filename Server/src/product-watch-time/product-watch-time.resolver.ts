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

  @Mutation(() => ProductWatchTime)
  createProductWatchTime(
    @Args('createProductWatchTimeInput')
    createProductWatchTimeInput: CreateProductWatchTimeInput,
  ) {
    return this.productWatchTimeService.create(createProductWatchTimeInput);
  }

  @Query(() => [ProductWatchTime], { name: 'productWatchTime' })
  findAll() {
    return this.productWatchTimeService.findAll();
  }

  @Query(() => ProductWatchTime, { name: 'productWatchTime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productWatchTimeService.findOne(id);
  }

  @Mutation(() => ProductWatchTime)
  updateProductWatchTime(
    @Args('updateProductWatchTimeInput')
    updateProductWatchTimeInput: UpdateProductWatchTimeInput,
  ) {
    return this.productWatchTimeService.update(
      updateProductWatchTimeInput.id,
      updateProductWatchTimeInput,
    );
  }

  @Mutation(() => ProductWatchTime)
  removeProductWatchTime(@Args('id', { type: () => Int }) id: number) {
    return this.productWatchTimeService.remove(id);
  }

  @ResolveField((returns) => UserWatchTime)
  user_watch_times(
    @Parent() userWatchTime: UserWatchTime,
  ): Promise<UserWatchTime[]> {
    return this.userWatchTimeService.findUserWatchTimes(userWatchTime.user_id);
  }

  @ResolveField((returns) => Product)
  product(@Parent() product: Product): Promise<Product> {
    return this.productsService.findOne(product.product_id);
  }

  @Subscription((returns) => ProductWatchTime, { name: 'userWatchTimeAdded' })
  async userWatchTimeAdded() {
    if (!(await pubSub.asyncIterator('userWatchTimeAdded').return())) {
      throw new Error('Something Went wrong');
    }
    const userWatchTime = (
      await pubSub.asyncIterator('userWatchTimeAdded').return()
    ).value as UserWatchTime;

    const productWatchTime = await this.productWatchTimeService.findByProductId(
      userWatchTime.product.product_id,
    );

   
    // Update the ProductWatchTime
    await getConnection()
      .createQueryBuilder()
      .update(ProductWatchTime)
      .set({
        ...productWatchTime,
        user_watch_times: [...productWatchTime.user_watch_times, userWatchTime],
      })
      .where('product_id = :product_id', {
        product_id: userWatchTime.product.product_id,
      })
      .execute();
    return this.productWatchTimeService.findByProductId(
      userWatchTime.product.product_id,
    );
  }
}
