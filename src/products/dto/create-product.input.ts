import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class CreateProductInput {
  @Field((type) => String)
  userId: string;

  @Field((type) => String)
  productId?: string;

  @Field((type) => String)
  productName?: string;

  @Field((type) => Boolean)
  sold?: boolean;

  @Field(() => [String])
  images?: string[];

  @Field((type) => String)
  video?: string;
}
