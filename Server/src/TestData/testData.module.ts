import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { TestDataService } from './testData.service';
import { TestDataResolver } from './testData.resolver';
import { WatchTime } from 'src/watch-time/entities/watch-times.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, User, Comment, WatchTime])],
  providers: [TestDataResolver, TestDataService],
  exports: [],
})
export class TestDataModule {}
