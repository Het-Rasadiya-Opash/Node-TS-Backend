import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

export interface RequestWithUser extends Request {
  user?: UserPayload;
}

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "You must be logged in" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET) as UserPayload;
    (req as RequestWithUser).user = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
