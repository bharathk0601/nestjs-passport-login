import { SetMetadata } from '@nestjs/common';

export enum Permission {
    Read = 'read',
    write = 'write',
}

export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...permissions: Permission[]) => SetMetadata(PERMISSIONS_KEY, permissions);