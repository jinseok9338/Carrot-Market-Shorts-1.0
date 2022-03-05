import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserWatchTimeService } from './user-watch-time.service';
import { UserWatchTime } from './entities/user-watch-time.entity';
import { CreateUserWatchTimeInput } from './dto/create-user-watch-time.input';

@Resolver(() => UserWatchTime)
export class UserWatchTimeResolver {
  constructor(private readonly userWatchTimeService: UserWatchTimeService) {}

  @Mutation(() => UserWatchTime)
  createUserWatchTime(
    @Args('createUserWatchTimeInput')
    createUserWatchTimeInput: CreateUserWatchTimeInput,
  ) {
    return this.userWatchTimeService.create(createUserWatchTimeInput);
  }
}
