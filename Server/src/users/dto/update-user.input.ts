import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsInt()
  @Field(() => Int, { nullable: false })
  user_id: number;

  @IsString()
  @Field({ nullable: true })
  user_name?: string;

  @IsString()
  @Field({ nullable: true })
  password?: string;

  @IsString()
  @Field({ nullable: true })
  email?: string; // You can... but you can't change the email

  @IsBoolean()
  @Field({ nullable: true })
  confirm_email?: boolean;

  @IsString()
  @Field({ nullable: true })
  first_name?: string;

  @IsString()
  @Field({ nullable: true })
  last_name?: string;

  @IsDate()
  @Field({ nullable: true })
  expiration_email_time?: Date;
}
