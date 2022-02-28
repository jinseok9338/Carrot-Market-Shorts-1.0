import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProductWatchTime {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
