import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductsModule } from 'src/products/products.module';
import { CommentModule } from 'src/comments/comments.module';
import { Comment } from 'src/comments/entities/comment.entity';
import { WatchTime } from 'src/watch-time/entities/watch-times.entity';
import { WatchTimeModule } from 'src/watch-time/watch-time.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Product, Comment, WatchTime]),
    forwardRef(() => ProductsModule),
    forwardRef(() => CommentModule),
    forwardRef(() => WatchTimeModule),
  ],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
