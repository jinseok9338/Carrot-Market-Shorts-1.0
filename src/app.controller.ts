import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AppService } from './app.service';

//TODO Complete SignUp and Login Process 

@Controller()
export class AppController {
  constructor(private authService: AuthService, private appService: AppService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.body.user);
  }

  @Post('signUp')
  async signUp(@Request() req) {
    return this.authService.signUp(req.body.signUpUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('hello')
  getHello(): string {
    return this.authService.getHello();
  }
}
