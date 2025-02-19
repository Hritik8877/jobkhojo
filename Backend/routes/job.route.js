import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getadminjob, getAlljob, getjobByid, postjob } from "../controllers/job.controller.js";


const jobroute=express.Router();
    
jobroute.route("/post").post(isAuthenticated,postjob);
jobroute.route("/get").get(isAuthenticated,getAlljob);
jobroute.route("/getadminjobs/").get(isAuthenticated,getadminjob);
jobroute.route("/get/:id").get(isAuthenticated,getjobByid);

export default jobroute;