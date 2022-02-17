import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class PaginationInput {
  @Field(() => String)
  user_id: string;

  @Field(() => Int)
  take: number;

  @Field(() => Int)
  page: number;
}
