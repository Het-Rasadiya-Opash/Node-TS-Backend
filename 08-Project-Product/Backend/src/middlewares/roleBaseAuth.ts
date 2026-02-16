import type { NextFunction, Request, Response } from "express";
import type { Role } from "../types/type.js";
import type { RequestWithUser } from "./verifyToken.js";

const roleBasedAuthorize = (...roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as RequestWithUser).user;

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};

export default roleBasedAuthorize;
