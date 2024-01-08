// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginData: { username: string, password: string }) {
    return this.authService.login(loginData);
  }

  @Post('/signup')
  async signup(@Body() signupData: { username: string, password: string }) {
    return this.authService.signup(signupData);
  }
}
