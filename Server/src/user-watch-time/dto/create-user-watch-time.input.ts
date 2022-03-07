import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserWatchTimeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
