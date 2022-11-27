import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../common/common.dto';
import { jwtOptions } from '../config/jwt.config';
import { USERS } from '../common/constant';

@Injectable()
export class AuthService {
    constructor(
        @Inject(USERS) private readonly users: User[],
        private readonly jwtService: JwtService
        ) {}

    async login(loginRequest: any) {
        const user = this.users.find(item => item.email === loginRequest.email);
        if(user?.password !== loginRequest.password) {
            throw new BadRequestException("Invalid Creds.");
        }

        const token = await this.jwtService.signAsync({ ...user, password: undefined }, jwtOptions);
        this.jwtService.verifyAsync
        return { token };
    }
}
