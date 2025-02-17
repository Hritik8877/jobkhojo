import express from "express";
import { login, logout, register, updateprofile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const userRoute=express.Router();

userRoute.route("/register").post(register);
userRoute.route("/login").post(login);
userRoute.route("/logout").post(logout);
userRoute.route("/profile/update").post(isAuthenticated,updateprofile);

export default userRoute;