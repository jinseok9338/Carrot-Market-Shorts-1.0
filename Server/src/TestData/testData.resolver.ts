import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { User } from 'src/users/entities/user.entity';
import { TestDataService } from './testData.service';

@Resolver(() => {})
export class TestDataResolver {
  constructor(private testDataService: TestDataService) {}

  @Mutation(() => [User])
  async createTestData(
    @Args('customerNumber') customerNumber: number,
  ): Promise<User[]> {
    return await this.testDataService.addTestData(customerNumber);
  }
}
