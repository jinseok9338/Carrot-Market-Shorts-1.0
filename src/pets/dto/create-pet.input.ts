import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
