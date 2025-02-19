
import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyjob, getappliedjob, getApplicant, updatestatus } from "../controllers/application.controller.js";

const applicationroute=express.Router();


  
applicationroute.route("/apply/:id").get(isAuthenticated,applyjob);
applicationroute.route("/get").get(isAuthenticated,getappliedjob);
applicationroute.route("/:id/applicants").get(isAuthenticated,getApplicant);
applicationroute.route("/status/:id/update").post(isAuthenticated,updatestatus);

export default applicationroute;