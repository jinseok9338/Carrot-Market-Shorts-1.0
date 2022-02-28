import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductWatchTimeService } from './product-watch-time.service';
import { ProductWatchTime } from './entities/product-watch-time.entity';
import { CreateProductWatchTimeInput } from './dto/create-product-watch-time.input';
import { UpdateProductWatchTimeInput } from './dto/update-product-watch-time.input';

@Resolver(() => ProductWatchTime)
export class ProductWatchTimeResolver {
  constructor(private readonly productWatchTimeService: ProductWatchTimeService) {}

  @Mutation(() => ProductWatchTime)
  createProductWatchTime(@Args('createProductWatchTimeInput') createProductWatchTimeInput: CreateProductWatchTimeInput) {
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
  updateProductWatchTime(@Args('updateProductWatchTimeInput') updateProductWatchTimeInput: UpdateProductWatchTimeInput) {
    return this.productWatchTimeService.update(updateProductWatchTimeInput.id, updateProductWatchTimeInput);
  }

  @Mutation(() => ProductWatchTime)
  removeProductWatchTime(@Args('id', { type: () => Int }) id: number) {
    return this.productWatchTimeService.remove(id);
  }
}
