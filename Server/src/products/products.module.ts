import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';
import { ProductDataController } from './productData.controller';
import { ProductsDataService } from './productData.service';
import { Comment } from 'src/comments/entities/comment.entity';

import { CommentModule } from 'src/comments/comments.module';

import { ProductWatchTimeModule } from 'src/product-watch-time/product-watch-time.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, User, Comment]),
    forwardRef(() => ProductWatchTimeModule),
    forwardRef(() => CommentModule),
    forwardRef(() => UsersModule),
  ],
  providers: [ProductsResolver, ProductsService, ProductsDataService],
  controllers: [ProductDataController],
  exports: [ProductsService],
})
export class ProductsModule {}
