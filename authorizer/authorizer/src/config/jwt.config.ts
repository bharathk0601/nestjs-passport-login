import { JwtSignOptions } from "@nestjs/jwt";

export const jwtOptions: JwtSignOptions = {
    expiresIn: process.env.EXPIRES_IN,
    secret: process.env.PRIVATE_KEY.replace(/\\n/g,"\n").replace(/\'/g, ""),
    algorithm: 'RS256'
}

export const publicKey = process.env.PUBLIC_KEY.replace(/\\n/g,"\n").replace(/\'/g, "");