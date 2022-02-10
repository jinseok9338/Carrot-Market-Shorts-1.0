import { Module } from '@nestjs/common';
import { WatchTimeService } from './watch-time.service';
import { WatchTimeResolver } from './watch-time.resolver';

@Module({
  providers: [WatchTimeResolver, WatchTimeService]
})
export class WatchTimeModule {}
