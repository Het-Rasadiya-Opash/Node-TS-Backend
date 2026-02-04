import type { NextFunction, Request, Response } from "express";
import type { RequestWithUser, Role } from "./isLoggedIn.js";

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
