import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {getConnection, InsertResult} from "typeorm";
import { MockProductData } from 'src/users/mockData/ProductUserData';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Mockdata } from './mockData/UsersMockData';
import { ReturnType } from './entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async createUser({
    user_name,
    password,
    password_confirm,
    email,
    first_name,
    last_name,
    confirm_email,
  }: CreateUserInput): Promise<ReturnType> {
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
          user_name,
          password,
          confirm_email,
          email,
          first_name,
          last_name,
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
    console.log(res.length);
    return this.usersRepository.find(); // SELECT * pet
  }

  async findOne(user_id: number): Promise<User> {
    return this.usersRepository.findOneOrFail(user_id);
  }
  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneOrFail({ email });
  }

  async addMockUsers(): Promise<User[]> {
    try {
      let UserRes = await getConnection()
      .createQueryBuilder()
       .insert()
       .into(User)
      .values(Mockdata)
      .execute()
      
      let Productres = await getConnection()
      .createQueryBuilder()
       .insert()
       .into(Product)
      .values(MockProductData)
      .execute()

      return this.usersRepository.find()
    } catch (e) {
      console.log(e);
    }
  }
}

// TODO Tomorrow job
// 

;
