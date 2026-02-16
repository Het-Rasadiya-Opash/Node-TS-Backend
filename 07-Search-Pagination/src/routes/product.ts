import express from "express";
import { getAllProducts, searchProduct } from "../controllers/product.js";
const router = express.Router();

router.route("/").get(getAllProducts);

router.route("/search").get(searchProduct);

export default router;
