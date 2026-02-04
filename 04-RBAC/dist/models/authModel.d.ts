import { Document, Model } from "mongoose";
interface UserType {
    username: string;
    password: string;
    role: "Admin" | "User" | "Manager";
}
type UserDocument = UserType & Document;
export declare const userModel: Model<UserDocument>;
export {};
//# sourceMappingURL=authModel.d.ts.map