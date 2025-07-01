import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authControllers.js";

const router = express.Router();
//@ desc Register a new user
//@ route POST /api/auth/register
//@ access Public
router.post("/register", registerController);

//@ desc Login a user
//@ route POST /api/auth/login
//@ access Public
router.post("/login", loginController);

export default router;
