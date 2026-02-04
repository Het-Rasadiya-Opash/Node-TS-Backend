import mongoose, { Document, Model, Schema } from "mongoose";

interface UserType {
  email: string;
  username: string;
  password: string;
}

type UserDocument = UserType & Document;

const userSchema: Schema<UserDocument> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userModel: Model<UserDocument> = mongoose.model<UserDocument>(
  "user",
  userSchema,
);
