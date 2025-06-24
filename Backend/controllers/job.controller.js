import { Job } from "../models/job.model.js";

export  const postjob=async(req,res)=>{
    try {
        const {title,description,requirements,salary,location,jobType,experience,position,companyId}=req.body;
        const userId=req._id;
        if(!title||!description||!requirements||!salary||!location||!jobType||!position||!companyId||!experience){
            return res.status(400).json({
                message:"please fill all details",
                success:false
            })
        }
        const job=await Job.create({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,
            jobType,
            position,
            expereienceLevel:experience,
            company:companyId,
            created_by:userId
        })
        return res.status(201).json({
            message:"job created successfully",
            success:true,
            data:job
        })

    
    } catch (error) {
        console.log(error);
        
    }
}

export const getAlljob=async(req,res)=>{
    try {
        const keyword =req.query.keyword||"";
        const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}}

            ]
        }
        const jobs=await Job.find(query).populate({
            path:"company"
        }).sort({created_at:-1})
        if(!jobs){
            return res.status(200).json({
                messsage:"job not  found",
                success:false,
        
            })

    
        }
        return res.status(200).json({
            message:"job found",
            success:true,
            data:jobs
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getjobByid=async(req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId).populate({
            path:"applications"
        })
        if(!job){
            return res.status(404).json({
                message:"job not found",
                success:false
            })
        }

        return res.status(200).json({
            message:"job found successfully",
            success:true,
            data:job
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getadminjob=async(req,res)=>{
    try {
        const adminid=req._id;
       // const adminid = req.id;
        if (!adminid) {
            return res.status(400).json({
                message: "Admin ID is required",
                success: false
            });
        }
        const jobs=await Job.find({created_by:adminid});
        if(!jobs){
            res.status(404).json({
                message:"job not found",
                success:false
            })
        }

        return res.status(200).json({
            message:"job found",
            success:true,
            data:jobs
        })
    } catch (error) {
        console.log(error);
        
    }

}