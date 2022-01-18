import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginReturn, UserInfo } from './type';

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
  async login(userInfo:UserInfo): Promise<LoginReturn|Error> {
  
    if (!userInfo.confirm_email){
      return new Error("Your Email is not verified yet")
    }

    const payload = userInfo;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(signUpUser: {
    user_name: string;
    email: string;
    first_name: string;
    last_name: string;
    confirm_email: boolean;
    password: string;
    password_confirm: string;
  }) {
    // I need to mark it types

    signUpUser.confirm_email = false;

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

 async confirmEmail(email:string): Promise<string> {
   const user = await this.usersService.findByEmail(email)
   // Do logic if certain amount of time has passed return Not valid Link
  let res  = await this.usersService.updateUserInfo(user,{confirm_email: true, expiration_email_time:null})
    return res
  }
}
