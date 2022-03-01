import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
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

  //Whenever the addWatchUserTime is fired listen to it and fire up add to the product watch tiome
  async addUserWatchTime(
    user_id: string,
    seconds: number,
  ): Promise<UserWatchTime> {
    //Find the WatchTIme by the user_id
    let watch_time = await this.userWatchTimesRepository
      .createQueryBuilder()
      .where('user_id IN (:user_id)', { user_id })
      .getOne();
    // If not found create one
    if (!watch_time) {
      const new_watch_time = await this.userWatchTimesRepository.save(
        this.userWatchTimesRepository.create({
          user_id,
          watch_time_id: uuid(),
          watch_time_seconds: seconds,
        }),
      );
      watch_time = new_watch_time;
    }

    return watch_time;
  }
}
