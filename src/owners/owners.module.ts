import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';

@Module({
  providers: [OwnersResolver, OwnersService]
})
export class OwnersModule {}
