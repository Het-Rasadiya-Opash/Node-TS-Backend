import type { NextFunction, Request, Response } from "express";
interface UserPayload {
    id: string;
    email: string;
}
export interface RequestWithUser extends Request {
    user?: UserPayload;
}
export declare const isLoggedIn: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=isLoogedIn.d.ts.map