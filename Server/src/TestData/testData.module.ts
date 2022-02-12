import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ProductDataController } from 'src/products/productData.controller';
import { ProductsDataService } from 'src/products/productData.service';
import { ProductsResolver } from 'src/products/products.resolver';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { Comment } from 'src/comments/entities/comment.entity';
import { TestDataService } from './testData.service';
import { TestDataResolver } from './testData.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product, User, Comment])],
  providers: [TestDataResolver, TestDataService],
  exports: [],
})
export class TestDataModule {}
