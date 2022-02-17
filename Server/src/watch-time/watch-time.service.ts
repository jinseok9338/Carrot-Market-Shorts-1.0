import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWatchTimeInput } from './dto/create-watch-time.input';
import { UpdateWatchTimeInput } from './dto/update-watch-time.input';
import { WatchTime } from './entities/watch-times.entity';

@Injectable()
export class WatchTimeService {
  constructor(
    @InjectRepository(WatchTime)
    private watchTimeRepository: Repository<WatchTime>,
  ) {}

  create(createWatchTimeInput: CreateWatchTimeInput) {
    return 'This action adds a new watchTime';
  }

  async addWatchTime(product_id: string, seconds: number) {
    let watch_time: WatchTime = await this.watchTimeRepository.findOne(
      product_id,
    );

    await this.watchTimeRepository.update(product_id, {
      watch_time_seconds: watch_time.watch_time_seconds + seconds,
    });

    return await this.watchTimeRepository.findOne(product_id);
  }

  findAll() {
    return `This action returns all watchTime`;
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
