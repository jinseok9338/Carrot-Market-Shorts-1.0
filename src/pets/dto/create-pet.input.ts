import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => Int)
  owner_id: number;
}
