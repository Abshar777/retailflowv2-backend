import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import type { StringValue } from "ms";
import IJwtService from "../interface/jwt.ineterface";
dotenv.config();

/** @Service */
class JwtService implements IJwtService {
  private secret: string;

  constructor() {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing. Please set it in environment variables.");
    }

    this.secret = process.env.JWT_SECRET;
  }

  generateToken(payload: object, expiresIn: StringValue | number = "1d") {
    try {
      return jwt.sign(payload, this.secret, { expiresIn });
    } catch {
      throw new Error("Failed to generate token");
    }
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch {
      throw new Error("Invalid token");
    }
  }
}

export default JwtService;
