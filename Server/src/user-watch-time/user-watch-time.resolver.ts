import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserWatchTimeService } from './user-watch-time.service';
import { UserWatchTime } from './entities/user-watch-time.entity';
import { CreateUserWatchTimeInput } from './dto/create-user-watch-time.input';
import { UpdateUserWatchTimeInput } from './dto/update-user-watch-time.input';
import { pubSub } from '../product-watch-time/product-watch-time.resolver';

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

  @Query(() => [UserWatchTime], { name: 'userWatchTime' })
  findAll() {
    return this.userWatchTimeService.findAll();
  }

  @Query(() => UserWatchTime, { name: 'userWatchTime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userWatchTimeService.findOne(id);
  }

  @Mutation(() => UserWatchTime)
  updateUserWatchTime(
    @Args('updateUserWatchTimeInput')
    updateUserWatchTimeInput: UpdateUserWatchTimeInput,
  ) {
    return this.userWatchTimeService.update(
      updateUserWatchTimeInput.id,
      updateUserWatchTimeInput,
    );
  }

  @Mutation(() => UserWatchTime)
  removeUserWatchTime(@Args('id', { type: () => Int }) id: number) {
    return this.userWatchTimeService.remove(id);
  }

  @Mutation(() => UserWatchTime)
  async addWatchTime(
    @Args('seconds', { type: () => Int }) seconds: number,
    @Args('user_id', { type: () => String }) user_id: string,
  ) {
    const userWatchTime = await this.userWatchTimeService.addUserWatchTime(
      user_id,
      seconds,
    );
    pubSub.publish('userWatchTimeAdded', { userWatchTimeAdded: userWatchTime });
    return userWatchTime;
  }
}
