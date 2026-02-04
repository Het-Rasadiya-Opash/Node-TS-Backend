import type { NextFunction, Request, Response } from "express";
export type Role = "Admin" | "Manager" | "User";
export interface UserPayload {
    id: string;
    role: Role;
}
export interface RequestWithUser extends Request {
    user?: UserPayload;
}
declare const isLoggedIn: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default isLoggedIn;
//# sourceMappingURL=isLoggedIn.d.ts.map