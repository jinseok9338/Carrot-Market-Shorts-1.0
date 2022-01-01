import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Match } from './match.decorator';

@InputType()
export class CreateUserInput {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Field()
  userId: string;

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
  passwordConfirm: string;
}
