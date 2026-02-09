import mongoose, { Schema, Document, Model } from "mongoose";

export interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

type UserDocument = Document & User;

export const userSchema: Schema<UserDocument> = new Schema<UserDocument>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
});

export const userModel: Model<UserDocument> = mongoose.model<UserDocument>(
  "user",
  userSchema,
);


