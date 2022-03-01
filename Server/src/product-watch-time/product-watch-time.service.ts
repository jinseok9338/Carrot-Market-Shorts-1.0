import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateProductWatchTimeInput } from './dto/create-product-watch-time.input';
import { UpdateProductWatchTimeInput } from './dto/update-product-watch-time.input';
import { ProductWatchTime } from './entities/product-watch-time.entity';

@Injectable()
export class ProductWatchTimeService {
  constructor(
    @InjectRepository(ProductWatchTime)
    private productWatchTimeRepository: Repository<ProductWatchTime>,
  ) {}

  create(createProductWatchTimeInput: CreateProductWatchTimeInput) {
    return 'This action adds a new productWatchTime';
  }

  findAll() {
    return `This action returns all productWatchTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productWatchTime`;
  }

  update(id: number, updateProductWatchTimeInput: UpdateProductWatchTimeInput) {
    return `This action updates a #${id} productWatchTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} productWatchTime`;
  }

  addProductWatchTime(seconds: number, product_id: string) {
    const product_watch_time =
      this.productWatchTimeRepository.findOne(product_id);
    if (!product_watch_time) {
      throw new Error('There is no ProductWatchTime');
    }
  }
}
