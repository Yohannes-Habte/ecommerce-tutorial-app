import express from "express";
import {
  createUser,
  forgotPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  resetPassword,
  updateUser,
} from "../../controllers/auth/controller.js";
import { isAuthenticated } from "../../middlewares/auth/middleware.js";

const authRouter = express.Router();

// Define routes
authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);
authRouter.get("/me", isAuthenticated, getCurrentUser);
authRouter.put("/update", isAuthenticated, updateUser);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password/:token", resetPassword);
authRouter.post("/logout", isAuthenticated, logoutUser);

export default authRouter;
