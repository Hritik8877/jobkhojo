import {Company} from "../models/company.model.js";
import cloudinary from "../utils/Cloudinary.js";
import geturl from "../utils/datauri.js";
export const registercompany=async(req,res)=>{
    try {
        const {CompanyName}=req.body;
        if(!CompanyName){
            return res.status(400).json({
                message:"company name is missing",
                success:false
            })
        }
        let company=await Company.findOne({name:CompanyName});
        if(company){
            return res.status(400).json({
                messsage:"company already exists",
                success:false
            })
        }
        company=await Company.create({
            name:CompanyName,
            userId:req._id
        });
        return res.status(201).json({
            message:"company registered successfully",
            success:true,
            company
        })

        
    } catch (error) {
        console.log(error);
        
    }
}

export const getcompany=async(req,res)=>{
    try {
        const userId=req._id;//id of loggedin user
        const companies=await Company.find({userId})
        if(!companies){
            return res.status(404).json({
                message:"company dosent exists",
                success:false
            })
          
        }
        return res.status(200).json({
            message:"company fetched successfully ",
            success:true,
            companies
           })

    } catch (error) {
        console.log(error);
        
    }
}

export const getcompanybyid=async(req,res)=>{
    try {
        const companyId=req.params.id;
        const company=await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"company dosent exists",
                success:false
            })
        }
        return res.status(200).json({
            message:"company fetched successfully ",
            success:true
           })

    } catch (error) {
        console.log(error);
        
    }
}

export const updatecompany=async(req,res)=>{
    try {
       const {name,description,website,location}=req.body;
       const file=req.file;//file store on cloudinary

       const fileuri=geturl(file)
       const cloudresponse=await cloudinary.uploader.upload(fileuri.content);
       const logo=cloudresponse.secure_url;


       const updatedata={name,description,website,location,logo};
       const company=await Company.findByIdAndUpdate(req.params.id,updatedata,{new:true});
       if(!company){
        res.status(404).json({
            message:"company dosent exists ",
            success:false
        })
       }

       return res.status(200).json({
        message:"company updated successfully",
        success:true,
        company
       })

    } catch (error) {
        
    }
}