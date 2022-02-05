import { InputType, Field, Int } from '@nestjs/graphql';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateProductInput {
  @Field(() => String, { nullable: true })
  user_id?: string;

  @IsString()
  @Field({ nullable: true })
  product_name: string;

  @Field({ nullable: true })
  @IsBoolean()
  sold: boolean;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field({ nullable: true })
  @IsString()
  video: string;
}
