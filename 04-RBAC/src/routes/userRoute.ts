import express, { type Request, type Response } from "express";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import roleBaseAuthoriza from "../middlewares/roleBaseAuthoriza.js";
const router = express.Router();

router.get(
  "/user",
  isLoggedIn,
  roleBaseAuthoriza("User", "Manager", "Admin"),
  (req: Request, res: Response) => {
    res.status(200).json({ message: "User Page & Access all" });
  },
);
router.get(
  "/admin",
  isLoggedIn,
  roleBaseAuthoriza("Admin"),
  (req: Request, res: Response) => {
    res.status(200).json({ message: "Admin Page & Access only [Admin]" });
  },
);
router.get(
  "/manager",
  isLoggedIn,
  roleBaseAuthoriza("Manager", "Admin"),
  (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: "Manager Page & Access only [Admin & Manager]" });
  },
);

export default router;
