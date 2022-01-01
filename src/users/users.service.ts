import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private users: Repository<User>) {}

  async createUser({
    userId,
    password,
  }: CreateUserInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const is_userId_exist = await this.users.findOne({ userId });
      if (is_userId_exist) {
        return { ok: false, error: 'User already exists' };
      }
      await this.users.save(this.users.create({ userId, password }));
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
