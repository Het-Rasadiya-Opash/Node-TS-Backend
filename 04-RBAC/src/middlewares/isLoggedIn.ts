import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export type Role = "Admin" | "Manager" | "User";

export interface UserPayload {
  id: string;
  role: Role;
}

export interface RequestWithUser extends Request {
  user?: UserPayload;
}

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token || token === "") {
    return res.status(401).json({ message: "No Token, authorization Denied" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT!) as UserPayload;
    console.log(data);
    (req as RequestWithUser).user = data;
    next();
  } catch (error) {}
};

export default isLoggedIn;
