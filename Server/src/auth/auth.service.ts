import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CustomReturnType, UserInfo } from './type';
import { CreateUserInput } from 'src/users/dto/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{
    user_name: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    confirm_email?: boolean;
  } | null> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return null;
    }
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // TODO Tweak Login that if the user.confirmEmail is not true throw error
  async login(userInfo: UserInfo): Promise<CustomReturnType | Error> {
    if (!userInfo.confirm_email) {
      return {
        statusCode: 500,
        error: 'The email is not verifed yet',
        data: null,
      };
    }

    const payload = userInfo;
    return {
      statusCode: 200,
      data: { access_token: this.jwtService.sign(payload) },
    };
  }

  async signUp(signUpUser: CreateUserInput) {
    // I need to mark it types

    const { password, password_confirm, ...result } = signUpUser;

    // Create User in the dataBase then return access_token

    try {
      const user = await this.usersService.createUser(signUpUser);

      if (user.user) {
        user.user.password = '';
      }
      // Add to send the confirm Email Later ...
      return user.error
        ? { ...user }
        : { ...user, access_token: this.jwtService.sign(result) };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }

  async confirmEmail(email: string): Promise<string> {
    const user = await this.usersService.findByEmail(email);
    // Do logic if certain amount of time has passed return Not valid Link
    const start = user.expiration_email_time;
    if (!user.expiration_email_time) {
      return 'Your email is already verified';
    }
    const end = new Date();
    let elapsed = end.getTime() - start.getTime(); // In milliseconds
    if (elapsed > 1000 * 60 * 60 * 24) {
      return 'The Link is no longer valid';
    }
    let res = await this.usersService.updateUserInfo(user, {
      confirm_email: true,
      expiration_email_time: null,
    });
    return res;
  }
}
