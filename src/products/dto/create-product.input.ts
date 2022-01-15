import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field((type) => String)
  userId: string;

  @Field((type) => String)
  productId: string;

  @Field((type) => String)
  productName: string;

  @Field((type) => Boolean)
  sold: boolean;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field((type) => String)
  video: string;
}
