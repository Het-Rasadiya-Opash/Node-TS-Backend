import mongoose, { Document, Schema } from "mongoose";
import jwt, { type SignOptions } from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { JwtPayloadType, UserType } from "../types/type.js";

type UserDocument = Document & UserType;

const userSchema: Schema<UserDocument> = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be 6 Character"],
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (
  password: string,
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function (): string {
  const payload: JwtPayloadType = {
    _id: this._id.toString(),
    email: this.email,
    name: this.name,
    role: this.role,
  };

  return jwt.sign(payload, "secret");
};

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
