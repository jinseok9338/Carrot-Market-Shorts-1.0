import { CreateWatchTimeInput } from './create-watch-time.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWatchTimeInput extends PartialType(CreateWatchTimeInput) {
  @Field(() => Int)
  id: number;
}
