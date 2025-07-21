import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { NextFunction, Request, RequestHandler, Response } from "express";
interface JwtPayload{
    id :string
}
export const Auth: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(" ")[1];
    if(!token)
    {
        return res.status(401).json({
            message : "Token Missing"
        })
    }
    try {
        const payload = jwt.verify(token,process.env.JWT_TOKEN as string);
        next();
    } catch (error) {
        return res.status(403).json({
            message : "Invaild Token"
        })
    }
};