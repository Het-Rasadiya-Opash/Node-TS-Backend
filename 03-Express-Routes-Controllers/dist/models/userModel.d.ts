import { Document, Model } from "mongoose";
interface UserType {
    email: string;
    username: string;
    password: string;
}
type UserDocument = UserType & Document;
export declare const userModel: Model<UserDocument>;
export {};
//# sourceMappingURL=userModel.d.ts.map