import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    login(@Body() loginRequest: any) {
        return this.authService.login(loginRequest);
    } 
}
