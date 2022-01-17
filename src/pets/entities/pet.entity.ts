import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
