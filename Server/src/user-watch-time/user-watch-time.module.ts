import { forwardRef, Module } from '@nestjs/common';
import { UserWatchTimeService } from './user-watch-time.service';
import { UserWatchTimeResolver } from './user-watch-time.resolver';
import { UserWatchTime } from './entities/user-watch-time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserWatchTime, User, Product]),
    forwardRef(() => ProductsModule),
    forwardRef(() => UsersModule),
  ],
  providers: [UserWatchTimeResolver, UserWatchTimeService],
  exports: [UserWatchTimeService],
})
export class UserWatchTimeModule {}
