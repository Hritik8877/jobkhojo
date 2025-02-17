import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsoption={
    origin:'http/localhost:5173',
    Credentials:true,

}
app.use(cors(corsoption));
const PORT=3000


app.listen(PORT,()=>{
    console.log(`Server running at pot ${PORT}`);
    
})