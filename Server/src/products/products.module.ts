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
import { CommentService } from 'src/comments/comments.service';
import { CommentModule } from 'src/comments/comments.module';
import { WatchTimeModule } from 'src/watch-time/watch-time.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, User, Comment]),
    CommentModule,
    forwardRef(() => UsersModule),
    forwardRef(() => WatchTimeModule),
  ],
  providers: [ProductsResolver, ProductsService, ProductsDataService],
  controllers: [ProductDataController],
  exports: [ProductsService],
})
export class ProductsModule {}
