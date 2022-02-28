import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserWatchTime {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
