import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  user_id: string;

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

  @IsArray()
  @Field(() => [String])
  tag: string[];
}
