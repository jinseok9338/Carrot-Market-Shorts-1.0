import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Owner {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
