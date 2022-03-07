import { CreateUserWatchTimeInput } from './create-user-watch-time.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserWatchTimeInput extends PartialType(CreateUserWatchTimeInput) {
  @Field(() => Int)
  id: number;
}
