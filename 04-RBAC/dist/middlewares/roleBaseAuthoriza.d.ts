import type { NextFunction, Request, Response } from "express";
import type { Role } from "./isLoggedIn.js";
declare const roleBasedAuthorize: (...roles: Role[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default roleBasedAuthorize;
//# sourceMappingURL=roleBaseAuthoriza.d.ts.map