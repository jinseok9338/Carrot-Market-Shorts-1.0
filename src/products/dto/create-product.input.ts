import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  id: number;

  @IsString()
  @Field()
  @IsString()
  productId: string;

  @IsString()
  @Field()
  productName: string;

  @Field()
  @IsBoolean()
  sold: boolean;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field()
  @IsString()
  video: string;
}
