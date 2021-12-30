import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
import { CreatePetInput } from './dto/createPet.input';

@Resolver((_of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => Pet)
  pet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation((returns) => Pet)
  createPet(
    @Args('createPetInput') CreatePetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(CreatePetInput);
  }
}
