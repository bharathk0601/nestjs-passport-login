import { User } from "../common/common.dto";
import { Permission } from "./permission.config";
import { Role } from "./role.config";

export const users: User[] = [
    {
        id: 1,
        email: "jhon@gmail.com",
        name: "john",
        password: "12345678",
        roles: [Role.Admin],
        permissions: [Permission.Read]
    },
    {
        id: 2,
        "email": "max@gmail.com",
        name: "max",
        password: "567890"
    }
]