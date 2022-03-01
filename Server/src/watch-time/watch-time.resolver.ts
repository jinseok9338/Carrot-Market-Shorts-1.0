import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { WatchTimeService } from './watch-time.service';
import { WatchTime } from './entities/watch-times.entity';
import { CreateWatchTimeInput } from './dto/create-watch-time.input';
import { UpdateWatchTimeInput } from './dto/update-watch-time.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub(); // Stands for Publish and subscribe

@Resolver(() => WatchTime)
export class WatchTimeResolver {
  constructor(private readonly watchTimeService: WatchTimeService) {}

  @Mutation(() => WatchTime)
  createWatchTime(
    @Args('createWatchTimeInput') createWatchTimeInput: CreateWatchTimeInput,
  ) {
    return this.watchTimeService.create(createWatchTimeInput);
  }

  @Query(() => WatchTime, { name: 'watchTime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.watchTimeService.findOne(id);
  }

  @Mutation(() => WatchTime)
  updateWatchTime(
    @Args('updateWatchTimeInput') updateWatchTimeInput: UpdateWatchTimeInput,
  ) {
    return this.watchTimeService.update(
      updateWatchTimeInput.id,
      updateWatchTimeInput,
    );
  }

  @Mutation(() => WatchTime)
  removeWatchTime(@Args('id', { type: () => Int }) id: number) {
    return this.watchTimeService.remove(id);
  }

  @Subscription((returns) => WatchTime, { name: 'watchTimeAdded' })
  watchTimeAdded() {
    return pubSub.asyncIterator('Watch_time_added');
  }
}
