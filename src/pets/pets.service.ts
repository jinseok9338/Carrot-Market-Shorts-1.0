import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownersService: OwnersService,
  ) {}
  create(createPetInput: CreatePetInput) {
    return this.petsRepository.save(this.petsRepository.create(createPetInput));
  }

  findAll() {
    return this.petsRepository.find();
  }

  findOne(id: number) {
    return this.petsRepository.findOne(id);
  }

  getOwner(owner_id: number) {
    return this.ownersService.findOne(owner_id);
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
