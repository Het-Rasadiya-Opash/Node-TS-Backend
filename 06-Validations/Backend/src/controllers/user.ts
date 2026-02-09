import type { NextFunction, Request, Response } from "express";
import { validateUserInput } from "../validators/validation.js";
import { userModel } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { value, error } = validateUserInput(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const { email, password } = value;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      email,
      password: hashPass,
    });
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT as string,
      { expiresIn: "7d" },
    );
    res.cookie("token", token);
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};
