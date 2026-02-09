import express, {} from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/middleware.js";
import router from "./routes/user.js";
import cors from "cors";
dotenv.config();
const app = express();
dbConnect();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", router);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map