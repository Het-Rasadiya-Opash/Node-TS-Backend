import express from "express";
import { getUser, loginUser, logoutUser, registerUser } from "../controllers/user.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/logout").post(verifyToken, logoutUser);

router.route("/me").get(verifyToken, getUser);

export default router;
