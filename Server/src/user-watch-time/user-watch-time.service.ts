import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateUserWatchTimeInput } from './dto/create-user-watch-time.input';
import { UpdateUserWatchTimeInput } from './dto/update-user-watch-time.input';
import { UserWatchTime } from './entities/user-watch-time.entity';

@Injectable()
export class UserWatchTimeService {
  constructor(
    @InjectRepository(UserWatchTime)
    private userWatchTimesRepository: Repository<UserWatchTime>,
  ) {}

  create(createUserWatchTimeInput: CreateUserWatchTimeInput) {
    return 'This action adds a new userWatchTime';
  }

  async findUserWatchTime(user_id: string) {
    const watch_times = await getRepository(UserWatchTime)
      .createQueryBuilder('userWatchTime')
      .where('userWatchTime.user_id = :user_id', { user_id })
      .getMany();
    return watch_times;
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

  async findUserWatchTimes(user_id: string): Promise<UserWatchTime[]> {
    const userWatchTimes = await this.userWatchTimesRepository
      .createQueryBuilder()
      .where('user_id IN (:user_id)', { user_id })
      .getMany();

    return userWatchTimes;
  }
}
