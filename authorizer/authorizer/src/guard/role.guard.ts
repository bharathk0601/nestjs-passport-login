import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { PERMISSIONS_KEY } from '../config/permission.config';
import { Role, ROLES_KEY } from '../config/role.config';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const requiredPermission = this.reflector.getAllAndOverride<Role[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const { user } = context.switchToHttp().getRequest();

    if (requiredRoles) {
      const isRoleExists = requiredRoles.some((role) => user.roles?.includes(role));
      if(!isRoleExists) throw new ForbiddenException({ message: "Not Allowed."});;
    }

    if(requiredPermission) {
      const isPermissionExists = requiredPermission.some((permission) => user.permissions?.includes(permission));
      if(!isPermissionExists) throw new ForbiddenException({ message: "Insuffiecient Permission."});
    }

    return true;
  }
}
