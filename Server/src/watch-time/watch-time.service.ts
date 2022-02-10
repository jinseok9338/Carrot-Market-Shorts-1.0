import { Injectable } from '@nestjs/common';
import { CreateWatchTimeInput } from './dto/create-watch-time.input';
import { UpdateWatchTimeInput } from './dto/update-watch-time.input';

@Injectable()
export class WatchTimeService {
  create(createWatchTimeInput: CreateWatchTimeInput) {
    return 'This action adds a new watchTime';
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
