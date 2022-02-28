import { Module } from '@nestjs/common';
import { ProductWatchTimeService } from './product-watch-time.service';
import { ProductWatchTimeResolver } from './product-watch-time.resolver';

@Module({
  providers: [ProductWatchTimeResolver, ProductWatchTimeService]
})
export class ProductWatchTimeModule {}
