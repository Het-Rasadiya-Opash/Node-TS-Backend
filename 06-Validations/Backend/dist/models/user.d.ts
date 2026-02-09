import { Schema, Document, Model } from "mongoose";
export interface User {
    email: string;
    password: string;
    confirmPassword: string;
}
type UserDocument = Document & User;
export declare const userSchema: Schema<UserDocument>;
export declare const userModel: Model<UserDocument>;
export {};
//# sourceMappingURL=user.d.ts.map