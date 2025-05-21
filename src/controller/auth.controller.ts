import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import { IUserDocument } from "../interface/user.interface";
import { Model } from "mongoose";
import IJwtService from "../interface/jwt.ineterface";
import JwtService from "../utils/jwt";
import { messages, statusCodes } from "../constants/api.constants";

/** @Controller */
export class AuthController {
    private readonly userModel: Model<IUserDocument>;
    private readonly jwtService: IJwtService;

    constructor() {
        this.userModel = User;
        this.jwtService = new JwtService();
    }


    /**
     * @description Register user
     * @Method POST
     * @Route /api/auth/register
     * @Body email: string, password: string, name: string
     * @Response 201 - User registered successfully
     * @Response 400 - Email, password and name are required
     * @Response 500 - Internal server error
     * @ResponseJson {success: boolean, message: string, user: User, token: string}
     */
    async register(req: Request, res: Response, next: NextFunction) {
        const { name, email, password } = req.body;
        try {
            if (!name || !email || !password) {
                return res.status(statusCodes.BAD_REQUEST).json({ success: false, message: messages.CREDENTIALS_REQUIRED });
            }
            const userExists = await this.userModel.findOne({ email });
            if (userExists) {
                return res.status(statusCodes.BAD_REQUEST).json({ success: false, message: messages.USER_ALREADY_EXISTS });
            }
            const user = await this.userModel.create({ name, email, password });
            const token = this.jwtService.generateToken({ userId: user._id }, "1d");
            res.status(statusCodes.CREATED).json({ success: true, message: messages.CREATED, user, token });
        } catch (error) {
            next(error)
        }
    }

    /**
     * @description Login user
     * @Method POST
     * @Route /api/auth/login
     * @Body email: string, password: string
     * @Response 200 - User logged in successfully
     * @Response 400 - Email and password are required
     * @Response 500 - Internal server error
     * @ResponseJson {success: boolean, message: string, user: User, token: string}
     */
    async login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                return res.status(statusCodes.BAD_REQUEST).json({ success: false, message: messages.CREDENTIALS_REQUIRED });
            }
            const user = await this.userModel.findOne({ email });
            if (!user) {
                return res.status(statusCodes.BAD_REQUEST).json({ success: false, message: messages.USER_NOT_FOUND });
            }
            const isPasswordValid = user.comparePassword(password);
            if (!isPasswordValid) {
                return res.status(statusCodes.BAD_REQUEST).json({ success: false, message: messages.INVALID_PASSWORD });
            }
            const token = this.jwtService.generateToken({ userId: user._id }, "1d");
            res.status(statusCodes.OK).json({ success: true, message: messages.LOGIN_SUCCESS, user, token });
        } catch (error) {   
            next(error)
        }
    }

}

