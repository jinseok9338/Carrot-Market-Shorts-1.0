import { Module } from '@nestjs/common';
import { UserWatchTimeService } from './user-watch-time.service';
import { UserWatchTimeResolver } from './user-watch-time.resolver';
import { UserWatchTime } from './entities/user-watch-time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserWatchTime])],
  providers: [UserWatchTimeResolver, UserWatchTimeService],
  exports: [UserWatchTimeService],
})
export class UserWatchTimeModule {}
