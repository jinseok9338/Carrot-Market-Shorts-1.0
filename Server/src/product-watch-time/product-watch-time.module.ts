import { Module } from '@nestjs/common';
import { ProductWatchTimeService } from './product-watch-time.service';
import { ProductWatchTimeResolver } from './product-watch-time.resolver';
import { UserWatchTimeModule } from 'src/user-watch-time/user-watch-time.module';

@Module({
  imports: [UserWatchTimeModule],
  providers: [ProductWatchTimeResolver, ProductWatchTimeService],
})
export class ProductWatchTimeModule {}
