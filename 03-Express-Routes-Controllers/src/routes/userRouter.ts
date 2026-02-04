import express from "express";
import {
  createUser,
  deleteUser,
  editUser,
  getAll,
  getUserById,
  loginUser,
  logout,
} from "../controllers/userController.js";
import { isLoggedIn } from "../middlewares/isLoogedIn.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

router.post("/logout", isLoggedIn, logout);

router.get("/", isLoggedIn, getAll);
router.get("/:id", isLoggedIn, getUserById);

router.put("/:id", isLoggedIn, editUser);

router.delete("/:id", isLoggedIn, deleteUser);

export default router;
