import express from "express";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

//@ desc admin only access
//@ route GET /api/users/admin
//@ access Private, Admin
router.get("/admin", verifyToken, (req, res) => {
  // Logic for admin access
  res.status(200).json({ message: "Welcome to admin page" });
});

//@ desc manager and admin only access
//@ route GET /api/users/manager
//@ access Private, Manager and Admin
router.get("/manager", verifyToken, (req, res) => {
  // Logic for manager access
  res.status(200).json({ message: "Welcome to manager page" });
});

//@ desc All can  access
//@ route GET /api/users/user
//@ access Private, All users
router.get("/user", verifyToken, (req, res) => {
  // Logic for user access
  res.status(200).json({ message: "Welcome to user page" });
});

export default router;
