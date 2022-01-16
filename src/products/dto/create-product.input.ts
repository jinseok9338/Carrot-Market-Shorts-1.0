import { InputType, Field, Int } from '@nestjs/graphql';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @IsString()
  @Field((Type) => String)
  user_id: string;

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
