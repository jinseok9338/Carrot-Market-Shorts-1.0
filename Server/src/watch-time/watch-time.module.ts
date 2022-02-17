import { Module } from '@nestjs/common';
import { WatchTimeService } from './watch-time.service';
import { WatchTimeResolver } from './watch-time.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchTime } from './entities/watch-times.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WatchTime])],
  providers: [WatchTimeResolver, WatchTimeService],
  exports: [WatchTimeService],
})
export class WatchTimeModule {}
