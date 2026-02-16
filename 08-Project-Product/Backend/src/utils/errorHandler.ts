import type { NextFunction, Request, Response } from "express";

interface ErrorDefault {
  statusCode: number;
  message: string;
}

const errorHandler = (
  err: ErrorDefault,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
