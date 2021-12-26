import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true }) // For graphQl
  type?: string;
}
