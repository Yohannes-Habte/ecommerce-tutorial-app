import express from "express";
import {
  getAllUsers,
  getSingleUser,
} from "../../controllers/user/controller.js";
import { isAuthenticated } from "../../middlewares/auth/middleware.js";

const userRouter = express.Router();

// Define user routes here
userRouter.get("/", getAllUsers);
userRouter.get("/me", isAuthenticated, getSingleUser);

export default userRouter;
