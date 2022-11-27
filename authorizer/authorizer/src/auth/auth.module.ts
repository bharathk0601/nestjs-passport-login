import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt"
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { users } from '../config/users.config';
import { USERS } from '../common/constant';
import { jwtOptions } from '../config/jwt.config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [JwtModule.register(jwtOptions)],
  providers: [AuthService, JwtStrategy, { provide: USERS, useValue: users }],
  controllers: [AuthController]
})
export class AuthModule {}
