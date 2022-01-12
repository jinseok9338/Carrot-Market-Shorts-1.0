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

  async validateUser(email: string, password: string): Promise< {
    id: number;
    userId: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    confirmEmail?: boolean;
} |null> {
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

  async login(user: {email:string, password:string}){
    const userProfile = await this.validateUser(user.email, user.password)
    const payload = {...userProfile};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(signUpUser: {
    id: number;
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    confirmEmail: boolean;
    password: string;
    passwordConfirm: string;
}) { // I need to mark it types 
    
    const { password, passwordConfirm ,...result } = signUpUser;

       // Create User in the dataBase then return access_token
    
       try{
        const user = await this.usersService.createUser(signUpUser);

        if(user.user){
          user.user.password = ""
        }

        return {...user,
          access_token: this.jwtService.sign(result),
        };
       }
       catch(e){
         return {ok:false, error:e.message}
       }
   
  }


  getHello(): string {
    return 'Hello 3!';
  }
}
