import { forwardRef, Module } from '@nestjs/common';
import { UserWatchTimeService } from './user-watch-time.service';
import { UserWatchTimeResolver } from './user-watch-time.resolver';
import { UserWatchTime } from './entities/user-watch-time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserWatchTime]),
    forwardRef(() => ProductsModule),
  ],
  providers: [UserWatchTimeResolver, UserWatchTimeService],
  exports: [UserWatchTimeService],
})
export class UserWatchTimeModule {}
