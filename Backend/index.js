import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyroute from "./routes/company.route.js";
import jobroute from "./routes/job.route.js";
dotenv.config({});
const app=express();
connectDB();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsoption={
    origin:'http/localhost:5173',
    Credentials:true,

}
app.use(cors(corsoption));
const PORT=process.env.PORT ||3000;


//All api is here
app.use("/api/user/",userRoute);
app.use("/api/company/",companyroute)
app.use("/api/job/",jobroute);

app.listen(PORT,()=>{
    console.log(`Server running at pot ${PORT}`);
    
})