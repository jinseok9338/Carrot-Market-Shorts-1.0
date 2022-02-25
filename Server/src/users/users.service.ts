import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { ReturnType } from './entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { UserUpdateInfo } from './type/DataType';
import { uuid } from 'uuidv4';
import { defaultValue } from 'src/utils/defaultValue';
import { createUsers } from 'src/utils/fakeData/users';
import { createProducts } from 'src/utils/fakeData/products';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    @InjectRepository(Product) private commentRepository: Repository<Comment>,
  ) {}

  async createUser({
    user_id,
    user_name,
    password,
    password_confirm,
    email,
    first_name,
    last_name,
    confirm_email,
    expiration_email_time,
    display_pic,
  }: CreateUserInput): Promise<ReturnType> {
    let User_id = defaultValue({ initialValue: user_id, defaultValue: uuid() });

    let Confirm_email = defaultValue({
      initialValue: confirm_email,
      defaultValue: false,
    });

    let Expiration_email_time = defaultValue({
      initialValue: expiration_email_time,
      defaultValue: new Date(),
    });

    try {
      const is_userId_exist = await this.usersRepository.findOne({ user_name });
      const is_email_exist = await this.usersRepository.findOne({ email });
      if (password_confirm != password) {
        return { ok: false, error: 'Confirm Password again' };
      }
      if (is_userId_exist) {
        return { ok: false, error: 'User already exists' };
      }
      if (is_email_exist) {
        return { ok: false, error: 'Email already exists' };
      }
      await this.usersRepository.save(
        this.usersRepository.create({
          user_id: User_id,
          user_name,
          password,
          confirm_email: Confirm_email,
          email,
          first_name,
          last_name,
          expiration_email_time: Expiration_email_time,
          display_pic,
        }),
      );
      return {
        ok: true,
        user: await this.usersRepository.findOne({ user_name }),
      };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }

  async findAll(): Promise<User[]> {
    let res = await this.usersRepository.find();
    return this.usersRepository.find(); // SELECT * pet
  }

  async findOne(user_id: string): Promise<User> {
    return this.usersRepository.findOneOrFail(user_id);
  }
  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneOrFail({ email });
  }

  async deleteOne(user_id: string): Promise<string> {
    let user = await this.usersRepository.findOne(user_id);
    if (!user) {
      return `The user ${user_id} doesn't exist`;
    }
    await this.usersRepository.delete(user_id);
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Product)
      .where('user_id = :user_id', { user_id: user.user_id })
      .execute();
    return `Successfully Deleted the User ${user_id} `;
  }

  async updateUserInfo(
    user: User,
    updateInfo: UserUpdateInfo,
  ): Promise<string> {
    //update info should be an object

    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(updateInfo)
      .where('user_id = :user_id', { user_id: user.user_id })
      .execute();

    return 'Successfully updated the userInfo';
  }
}
