import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class LoginInput {
  @IsString()
  @Field()
  email: string;

  @IsString()
  @Field()
  password: string;
}
