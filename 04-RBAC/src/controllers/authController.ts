import type { Request, Response } from "express";
import { userModel } from "../models/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await userModel.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "User already Existing" });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    password: hashPassword,
    role,
  });
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT!, {
    expiresIn: "1h",
  });
  res.cookie("token", token);
  res.status(200).json({
    message: "User  Created Successfully...",
    user: {
      username: user.username,
      role: user.role,
    },
  });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "User Not Found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credential..." });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT!, {
    expiresIn: "1h",
  });
  res.cookie("token", token);
  res.status(200).json({
    message: `LoggedIn Successfully...`,
  });
};
