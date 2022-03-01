import { Module } from '@nestjs/common';
import { ProductWatchTimeService } from './product-watch-time.service';
import { ProductWatchTimeResolver } from './product-watch-time.resolver';
import { UserWatchTimeModule } from 'src/user-watch-time/user-watch-time.module';
import { ProductWatchTime } from './entities/product-watch-time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductWatchTime]),
    UserWatchTimeModule,
    ProductsModule,
  ],
  providers: [ProductWatchTimeResolver, ProductWatchTimeService],
})
export class ProductWatchTimeModule {}
