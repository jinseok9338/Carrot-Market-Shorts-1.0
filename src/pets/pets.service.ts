import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}
  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find(); // SELECT * pet
  }
}
