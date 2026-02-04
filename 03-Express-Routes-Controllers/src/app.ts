import dotenv from "dotenv";
dotenv.config();
import express, { type Application } from "express";
import userRouter from "./routes/userRouter.js";
import { dbConnect } from "./config/db.js";
import cookieParser from "cookie-parser";
const app: Application = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});
