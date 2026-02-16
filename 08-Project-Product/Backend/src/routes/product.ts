import express from "express";
import { createProduct, searchProduct } from "../controllers/product.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import roleBasedAuthorize from "../middlewares/roleBaseAuth.js";
const router = express.Router();

router.route("/search").get(searchProduct);

router
  .route("/create")
  .post(verifyToken, roleBasedAuthorize("Admin"), createProduct);

export default router;
