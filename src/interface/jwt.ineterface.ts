import type { JwtPayload } from "jsonwebtoken";
import type { StringValue } from "ms";

export default interface IJwtService {
    generateToken(payload: object, expiresIn: StringValue | number): string;
    verifyToken(token: string): JwtPayload | string;
}