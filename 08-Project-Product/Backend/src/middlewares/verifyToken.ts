import type { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import type { JwtPayloadType } from "../types/type.js";

export interface RequestWithUser extends Request {
  user?: JwtPayloadType;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      throw new ApiError(401, "Token Not Found");
    }
    const decode = jwt.verify(token, "secret") as JwtPayloadType;
    (req as RequestWithUser).user = decode;
    next();
  } catch (error) {
    throw new ApiError(400, "Token Not Valid and Not Found");
  }
};
