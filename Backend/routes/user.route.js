import express from "express";

import { login, logout, register, updateprofile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {singleupload}  from "../middlewares/multer.js";
const userRoute=express.Router();

    
userRoute.route("/register").post(singleupload,register);
userRoute.route("/login").post(login);
userRoute.route("/logout").get(logout);
userRoute.route("/profile/update").post(isAuthenticated,updateprofile);

export default userRoute;