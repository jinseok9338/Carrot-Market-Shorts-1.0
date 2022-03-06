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
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentService } from 'src/comments/comments.service';

import { PaginationInput } from './dto/PaginationInput';
import { ProductWatchTime } from 'src/product-watch-time/entities/product-watch-time.entity';
import { ProductWatchTimeService } from 'src/product-watch-time/product-watch-time.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private usersService: UsersService,
    private commentService: CommentService,
    private productWatchTimeService: ProductWatchTimeService,
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
  findOne(@Args('product_id', { type: () => String }) product_id: string) {
    return this.productsService.findOne(product_id);
  }

  @Query(() => [Product], { name: 'product_pagination' })
  paginateProduct(@Args('paginationInput') paginationInput: PaginationInput) {
    return this.productsService.paginateProduct(paginationInput);
  }

  @Query(() => [Product], { name: 'UserProducts' })
  UserProducts(@Args('user_id', { type: () => String }) user_id: string) {
    return this.productsService.findUserProducts(user_id);
  }

  @Mutation(() => String)
  removeProduct(
    @Args('product_id', { type: () => String }) product_id: string,
  ) {
    return this.productsService.removeOne(product_id);
  }

  @ResolveField((returns) => User)
  user(@Parent() user: User): Promise<User> {
    return this.usersService.findOne(user.user_id);
  }

  @ResolveField((returns) => [Comment])
  comments(@Parent() comment: Comment): Promise<Comment[]> {
    return this.commentService.findProductComments(comment.product_id);
  }

  @ResolveField((returns) => [ProductWatchTime])
  async product_watch_time(
    @Parent() productWatchTime: ProductWatchTime,
  ): Promise<ProductWatchTime> {
    return await this.productWatchTimeService.findByProductId(
      productWatchTime.product_id,
    );
  }
}
