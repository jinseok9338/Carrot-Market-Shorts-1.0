import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { User } from 'src/users/entities/user.entity';
import { TestDataService } from './testData.service';
import { Comment } from '../comments/entities/comment.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductWatchTime } from 'src/product-watch-time/entities/product-watch-time.entity';

@Resolver(() => User)
export class TestDataResolver {
  constructor(private testDataService: TestDataService) {}

  @Mutation(() => [User], { name: 'createTestUsers' })
  async createTestData(
    @Args('customerNumber') customerNumber: number,
  ): Promise<User[]> {
    return this.testDataService.addTestUsers(customerNumber);
  }

  @Mutation(() => [Comment], { name: 'createTestComments' })
  async createTestComment(): Promise<Comment[]> {
    return this.testDataService.addTestComment();
  }

  @Mutation(() => [Product], { name: 'createTestProducts' })
  async createTestProducts(): Promise<Product[]> {
    return this.testDataService.addTestProducts();
  }
}
