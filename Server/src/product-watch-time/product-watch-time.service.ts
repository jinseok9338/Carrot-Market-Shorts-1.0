import { Injectable } from '@nestjs/common';
import { CreateProductWatchTimeInput } from './dto/create-product-watch-time.input';
import { UpdateProductWatchTimeInput } from './dto/update-product-watch-time.input';

@Injectable()
export class ProductWatchTimeService {
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
}
