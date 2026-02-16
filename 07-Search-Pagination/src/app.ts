import express from "express";
import type { Request, Response } from "express";
import { connectDB } from "./db/db.js";
import errorHandler from "./utils/errorHandler.js";
import router from "./routes/product.js";
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", router);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
