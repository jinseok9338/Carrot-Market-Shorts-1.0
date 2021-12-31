import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
  ) {}
  create(createOwnerInput: CreateOwnerInput) {
    return 'This action adds a new owner';
  }

  findAll() {
    return `This action returns all owners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
