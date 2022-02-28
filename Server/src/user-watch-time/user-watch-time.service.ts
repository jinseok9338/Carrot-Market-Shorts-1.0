import { Injectable } from '@nestjs/common';
import { CreateUserWatchTimeInput } from './dto/create-user-watch-time.input';
import { UpdateUserWatchTimeInput } from './dto/update-user-watch-time.input';

@Injectable()
export class UserWatchTimeService {
  create(createUserWatchTimeInput: CreateUserWatchTimeInput) {
    return 'This action adds a new userWatchTime';
  }

  findAll() {
    return `This action returns all userWatchTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userWatchTime`;
  }

  update(id: number, updateUserWatchTimeInput: UpdateUserWatchTimeInput) {
    return `This action updates a #${id} userWatchTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} userWatchTime`;
  }
}
