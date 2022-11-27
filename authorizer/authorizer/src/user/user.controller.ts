import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guard/auth.guard';
import { RoleGuard } from '../guard/role.guard';
import { Permissions, Permission } from '../config/permission.config';
import { Role, Roles } from '../config/role.config';

@UseGuards(RoleGuard)
@UseGuards(AuthGuard)
@Controller()
export class UserController {
    constructor() {}


    @Roles(Role.User)
    @Permissions(Permission.Read)
    @Get("/protected")
    protected(@Req() req: any) {
        return { messge: "protected route." };
    }
}
