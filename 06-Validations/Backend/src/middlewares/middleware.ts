import type { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
  statusCode?: number;
  message: string;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).json({ message });
};
