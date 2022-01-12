import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

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
  }: CreateUserInput): Promise<{ ok: boolean; error?: string; user?: User }> {
    try {
      const is_userId_exist = await this.usersRepository.findOne({ userId });
      if (passwordConfirm != password) {
        return { ok: false, error: 'Confirm Password again' };
      }
      if (is_userId_exist) {
        return { ok: false, error: 'User already exists' };
      }
      await this.usersRepository.save(
        this.usersRepository.create({
          userId,
          password,
          confirmEmail:false,
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

  async login(email: string, password: string): Promise<User> {
    // I need to return token and do authentication here
    return this.usersRepository.findOne({ email });
  }
}
