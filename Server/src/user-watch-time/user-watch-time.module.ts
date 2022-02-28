import { Module } from '@nestjs/common';
import { UserWatchTimeService } from './user-watch-time.service';
import { UserWatchTimeResolver } from './user-watch-time.resolver';

@Module({
  providers: [UserWatchTimeResolver, UserWatchTimeService]
})
export class UserWatchTimeModule {}
