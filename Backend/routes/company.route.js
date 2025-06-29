import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getcompany, getcompanybyid, registercompany, updatecompany } from "../controllers/company.controller.js";
import {singleupload}  from "../middlewares/multer.js";

const companyroute=express.Router();
    
companyroute.route("/register").post(isAuthenticated,registercompany);
companyroute.route("/get").get(isAuthenticated,getcompany);
companyroute.route("/get/:id").get(isAuthenticated,getcompanybyid);
companyroute.route("/update/:id").put(isAuthenticated,singleupload,updatecompany);

export default companyroute;