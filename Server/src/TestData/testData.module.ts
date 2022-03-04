import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { TestDataService } from './testData.service';
import { TestDataResolver } from './testData.resolver';

import { ProductWatchTimeModule } from 'src/product-watch-time/product-watch-time.module';
import { ProductWatchTime } from 'src/product-watch-time/entities/product-watch-time.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, User, Comment, ProductWatchTime]),
  ],
  providers: [TestDataResolver, TestDataService],
  exports: [],
})
export class TestDataModule {}
