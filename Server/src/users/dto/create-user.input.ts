import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from './match.decorator';

@InputType()
export class CreateUserInput {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Field()
  user_name: string;

  @IsString()
  @IsUUID()
  @Field()
  user_id?: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // What's the password code??
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @Field()
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Match('password')
  @Field()
  password_confirm: string;

  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @MaxLength(20)
  @Field()
  first_name: string;

  @IsString()
  @MaxLength(20)
  @Field()
  last_name: string;

  @IsBoolean()
  @Field()
  confirm_email: boolean;

  @IsDate()
  @Field({ nullable: true })
  expiration_email_time?: Date;
}
