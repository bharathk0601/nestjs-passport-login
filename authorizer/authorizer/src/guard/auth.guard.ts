import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard as PassPortAuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends PassPortAuthGuard('jwt') implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);;
  }
}
