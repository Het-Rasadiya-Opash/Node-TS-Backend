import mongoose, { Document, Model, Schema } from "mongoose";

interface UserType {
  username: string;
  password: string;
  role: "Admin" | "User" | "Manager";
}

type UserDocument = UserType & Document;

const userSchema: Schema<UserDocument> = new mongoose.Schema<UserDocument>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Manager", "User"],
  },
});

export const userModel: Model<UserDocument> = mongoose.model<UserDocument>(
  "user",
  userSchema,
);
