import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/createPet.input';

import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/entities/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownersService: OwnersService,
  ) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput); // newPet = new Pet();

    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find(); // SELECT * pet
  }

  async findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOneOrFail(id);
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId);
  }
}
