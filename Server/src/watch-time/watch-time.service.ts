import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catch } from 'src/utils/Error/catch_decorator_class_excerpt';
import { getRepository, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateWatchTimeInput } from './dto/create-watch-time.input';
import { UpdateWatchTimeInput } from './dto/update-watch-time.input';
import { WatchTime } from './entities/watch-times.entity';

@Injectable()
@Catch(TypeError, (err, ctx) => console.log(ctx, err))
export class WatchTimeService {
  constructor(
    @InjectRepository(WatchTime)
    private watchTimeRepository: Repository<WatchTime>,
  ) {}

  create(createWatchTimeInput: CreateWatchTimeInput) {
    return 'This action adds a new watchTime';
  }

  async addWatchTime(product_id: string, seconds: number, user_id: string) {
    let watch_time: WatchTime = await this.watchTimeRepository.findOne({
      product_id,
    });

    // If not created, create watchTime first
    if (!watch_time) {
      watch_time = this.watchTimeRepository.create({
        watch_time_id: uuid(),
        user_id,
        product_id,
        watch_time_seconds: 0,
      });
      await this.watchTimeRepository.save(watch_time);
    }

    await this.watchTimeRepository.update(
      { product_id },
      {
        watch_time_seconds: watch_time.watch_time_seconds + seconds,
      },
    );

    return await this.watchTimeRepository.findOne({
      product_id,
    });
  }

  // Find the watch time of the products of product_ids  that are provided by the user Entity...
  async findUserWatchTime(user_id: string): Promise<WatchTime[]> {
    const watch_times = await getRepository(WatchTime)
      .createQueryBuilder('watchtime')
      .where('watchtime.user_id = :user_id', { user_id })
      .getMany();

    return watch_times;
  }

  async findProductWatchTime(product_id: string): Promise<WatchTime[]> {
    const watch_times = await getRepository(WatchTime)
      .createQueryBuilder('watchtime')
      .where('watchtime.product_id = :product_id', { product_id })
      .getMany();

    return watch_times;
  }

  findOne(id: number) {
    return `This action returns a #${id} watchTime`;
  }

  update(id: number, updateWatchTimeInput: UpdateWatchTimeInput) {
    return `This action updates a #${id} watchTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} watchTime`;
  }
}
