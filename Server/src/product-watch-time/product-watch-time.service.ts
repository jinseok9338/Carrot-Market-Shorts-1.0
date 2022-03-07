import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserWatchTime } from 'src/user-watch-time/entities/user-watch-time.entity';
import { getConnection, Repository } from 'typeorm';
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
    return this.productWatchTimeRepository.find();
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

  async findByProductId(product_id: string) {
    return await this.productWatchTimeRepository
      .createQueryBuilder()
      .where('product_id IN (:product_id)', { product_id })
      .getOne();
  }

  async updateProductWatchTime(
    product_id: string,
    user_id: string,
    userWatchTime: UserWatchTime,
  ) {
    const productWatchTime =
      await this.productWatchTimeRepository.findOneOrFail({ product_id });
    // find if the same user has already watched the same product

    let user_watch_time = productWatchTime.user_watch_times.filter(
      (user_watch_time) => user_watch_time.user_id == user_id,
    )[0];

    let rest_watch_times = productWatchTime.user_watch_times.filter(
      (user_watch_time) => user_watch_time.user_id != user_id,
    );

    if (user_watch_time) {
      user_watch_time.watch_time_seconds += userWatchTime.watch_time_seconds;

      // Update the user watch time seconds
      await getConnection()
        .createQueryBuilder()
        .update(ProductWatchTime)
        .set({
          ...productWatchTime,
          user_watch_times: [...rest_watch_times, user_watch_time],
        })
        .where('product_id = :product_id', {
          product_id: userWatchTime.product_id,
        })
        .execute();
    }

    // if the user_watch_time is not found add to the list rather than splice
    await getConnection()
      .createQueryBuilder()
      .update(ProductWatchTime)
      .set({
        ...productWatchTime,
        user_watch_times: [...productWatchTime.user_watch_times, userWatchTime],
      })
      .where('product_id = :product_id', {
        product_id: userWatchTime.product_id,
      })
      .execute();
    return await this.productWatchTimeRepository.findOneOrFail({
      product_id,
    });
  }
}
