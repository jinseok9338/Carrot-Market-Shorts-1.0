import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private authService: AuthService, private appService: AppService) {}

  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
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
