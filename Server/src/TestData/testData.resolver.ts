import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { User } from 'src/users/entities/user.entity';
import { TestDataService } from './testData.service';

@Resolver(() => {})
export class TestDataResolver {
  constructor(private testDataService: TestDataService) {}

  @Mutation(() => String)
  createTestData(@Args('customerNumber') customerNumber: number) {
    return this.testDataService.addTestData(customerNumber);
  }
}
