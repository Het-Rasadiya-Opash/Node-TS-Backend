import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbConnect } from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use('/api', userRouter);
app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});
//# sourceMappingURL=app.js.map