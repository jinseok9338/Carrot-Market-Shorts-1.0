import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';

@Module({
  providers: [PetsResolver, PetsService]
})
export class PetsModule {}
