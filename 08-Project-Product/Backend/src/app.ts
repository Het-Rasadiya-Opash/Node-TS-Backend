import express from "express";
import type { Request, Response } from "express";
import { connectDB } from "./db/db.js";
import errorHandler from "./utils/errorHandler.js";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/products", productRouter);
app.use("/user", userRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
