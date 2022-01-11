import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    // if user is not present return null ... or ... error...
    if (!user) return null;
    // Bcrypt the password
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }; // ?
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  getHello(): string {
    return 'Hello 3!';
  }
}
