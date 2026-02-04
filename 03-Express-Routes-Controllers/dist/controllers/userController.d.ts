import type { Request, Response } from "express";
export declare const createUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const editUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAll: (_req: Request, res: Response) => Promise<void>;
export declare const getUserById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const logout: (_req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=userController.d.ts.map