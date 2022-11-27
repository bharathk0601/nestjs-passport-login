import { Permission } from "../config/permission.config";
import { Role } from "../config/role.config";

export class User {
    id: number;
    email: string;
    name: string;
    password: string;
    roles?: Role[];
    permissions?: Permission[];
}