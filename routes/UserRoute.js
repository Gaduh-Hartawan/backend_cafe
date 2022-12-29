import express from "express";
import {
  getUser,
  getUserById,
  loginUser,
  registerUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
