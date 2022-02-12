import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { User } from 'src/users/entities/user.entity';
import { TestDataService } from './testData.service';
import { Comment } from '../comments/entities/comment.entity';

@Resolver(() => User)
export class TestDataResolver {
  constructor(private testDataService: TestDataService) {}

  @Mutation(() => [User], { name: 'createTest' })
  async createTestData(
    @Args('customerNumber') customerNumber: number,
  ): Promise<User[]> {
    return this.testDataService.addTestData(customerNumber);
  }

  @Mutation(() => [Comment], { name: 'createTestComment' })
  async createTestComment(): Promise<Comment[]> {
    return this.testDataService.addTestComment();
  }
}
