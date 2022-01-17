import { InputType, Field, Int } from '@nestjs/graphql';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => Int)
  user_id: number;

  @Field()
  @IsString()
  product_id: string;

  @IsString()
  @Field()
  product_name: string;

  @Field()
  @IsBoolean()
  sold: boolean;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field()
  @IsString()
  video: string;
}
