import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('product_id', { type: () => Int }) product_Id: number) {
    return this.productsService.findOne(product_Id);
  }

  @Mutation(() => String)
  removeProduct(@Args('product_id', { type: () => Int }) product_id: number) {
    return this.productsService.removeOne(product_id);
  }

  @ResolveField((returns) => User)
  user(@Parent() user: User): Promise<User> {
    return this.usersService.findOne(user.user_id);
  }
}