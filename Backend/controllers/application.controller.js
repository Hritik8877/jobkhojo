import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyjob=async(req,res)=>{
    try {
      const userId=req._id;
      const jobId=req.params.id; 
      if(!jobId){
          return res.status(400).json({
              message:"job id is required",
              success:false
          })
      }
      const existapplication=await Application.findOne({job:jobId,applicant:userId});

      if(existapplication){
        res.status(400).json({
            message:"application already exist",
            success:false
        })
      }
    const job=await Job.findById(jobId);
    if(!job){
      res.status(400).json({
        message:"job not found",
        success:false
      })
    }

    const newApplication=await Application.create({
        job:jobId,
        applicant:userId
    })
    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
        message:"application created successfully",
        success:true,
        data:newApplication
    })  
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getappliedjob=async(req,res)=>{
    try {
        const userId=req._id;
        const application=await Application.find({applicant:userId}).sort({created_at:-1}).populate({
          path:"job",
          options:{sort:{created_at:-1}},
          populate:{
            path:"company",
            options:{sort:{created_at:-1}},
        }
        })

        if(!application){
            return res.status(400).json({
                message:"application not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"application found successfully",
            success:true,
            data:application
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getApplicant=async(req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId).populate({
            path:"applications",
            options:{sort:{created_at:-1}},
            populate:{
                path:"applicant",
                options:{sort:{created_at:-1}},
            }
        })

        if(!job){
            return res.status(400).json({
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

export const updatestatus=async(req,res)=>{
    try {
        const {status}=req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(400).json({
                message:"status is required",
                success:false
            })
        }
        const application=await Application.findOne({_id:applicationId});

        if(!application){
            return res.status(400).json({
                message:"application not found",
                success:false
            })
        }

        application.status=status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message:"status updated successfully",
            success:true,
            data:application
        })
    } catch (error) {
        console.log(error);
        
    }
    
} 