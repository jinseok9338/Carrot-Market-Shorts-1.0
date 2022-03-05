import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/entities/user.entity';
import { Catch } from 'src/utils/Error/catch_decorator_class_excerpt';
import { getConnection, getRepository, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateUserWatchTimeInput } from './dto/create-user-watch-time.input';
import { UpdateUserWatchTimeInput } from './dto/update-user-watch-time.input';
import { UserWatchTime } from './entities/user-watch-time.entity';

@Injectable()
export class UserWatchTimeService {
  constructor(
    @InjectRepository(UserWatchTime)
    private userWatchTimesRepository: Repository<UserWatchTime>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createUserWatchTimeInput: CreateUserWatchTimeInput) {
    return 'This action adds a new userWatchTime';
  }

  async findUserWatchTimes(product_id: string): Promise<UserWatchTime[]> {
    const userWatchTimes = await this.userWatchTimesRepository
      .createQueryBuilder()
      .where('product_id IN (:product_id)', { product_id })
      .getMany();

    return userWatchTimes;
  }

  //Whenever the addWatchUserTime is fired listen to it and fire up add to the product watch tiome

  async addUserWatchTime(
    user_id: string,
    seconds: number,
    product_id: string,
  ): Promise<UserWatchTime> {
    //Find the ProdcutWatchTime by the user_id
    // If the watch Time is found then add the seconds to

    // See if the product_id and user_id is valid
    try {
      let user = await this.usersRepository
        .createQueryBuilder()
        .where('user_id IN (:user_id)', { user_id })
        .getOne();

      let product = await this.productsRepository
        .createQueryBuilder()
        .where('product_id IN (:product_id)', { product_id })
        .getOne();

      if (!user || !product) {
        throw new Error('There is no corresponding user or product');
      }

      let watch_time = await this.userWatchTimesRepository
        .createQueryBuilder()
        .where('user_id IN (:user_id)', { user_id }) // This is problem...
        .where('product_id IN (:product_id)', { product_id })
        .getOne();

      // If not found create one
      // with the product found with the associated product_id
      if (!watch_time) {
        const new_watch_time = await this.userWatchTimesRepository.save(
          this.userWatchTimesRepository.create({
            user_id,
            watch_time_id: uuid(),
            product_id,
            watch_time_seconds: seconds,
          }),
        );
        new_watch_time;
        return new_watch_time;
      }
      // Update the watchTime with the added time
      await getConnection()
        .createQueryBuilder()
        .update(UserWatchTime)
        .set({
          ...watch_time,
          watch_time_seconds: watch_time.watch_time_seconds + seconds,
        })
        .where('user_id IN (:user_id)', { user_id })
        .where('product_id IN (:product_id)', { product_id })
        .execute();
    } catch (e) {
      throw new Error(e.message);
    }

    return this.userWatchTimesRepository.findOneOrFail({ user_id });
  }
}
