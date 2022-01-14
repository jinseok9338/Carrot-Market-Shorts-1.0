import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { makeUserData } from 'src/data/userData';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Mockdata } from './mockData/UsersMockData';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser({
    userId,
    password,
    passwordConfirm,
    email,
    firstName,
    lastName,
    confirmEmail,
  }: CreateUserInput): Promise<{ ok: boolean; error?: string; user?: User }> {
    try {
      const is_userId_exist = await this.usersRepository.findOne({ userId });
      const is_email_exist = await this.usersRepository.findOne({ email });
      if (passwordConfirm != password) {
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
          userId,
          password,
          confirmEmail,
          email,
          firstName,
          lastName,
        }),
      );
      return { ok: true, user: await this.usersRepository.findOne({ userId }) };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find(); // SELECT * pet
  }

  async findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async addMockUsers(): Promise<User[] | Error> {
    // TODO Type Error I will fix it tomorrow
    try {
      const usersMockData = makeUserData();

      usersMockData.forEach(async (user) => {
        await this.usersRepository.save(this.usersRepository.create(user));
      });

      let users = await this.usersRepository.find();
      return users;
    } catch (e) {
      console.log(e);
      return new Error(e.message);
    }
  }
}
