import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  
  const params=useParams();
  const jobid=params.id;

  const {singleJob}=useSelector(store=>store.job);
  const {user}=useSelector(store=>store.auth);

  const dispatch=useDispatch();

  const isinitiallyapplied = singleJob?.applications?.some(application=>application.applicant==user?._id)||false;

  const [isApplied,setisApplied]=useState(isinitiallyapplied);


  const applyjobhandler=async()=>{
    try {

      const res=await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobid}`,{withCredentials:true})
      console.log(res.data)

      if(res.data.success){
        setisApplied(true);
        const updatesinglejob={...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]}
        dispatch(setSingleJob(updatesinglejob))
        toast.success(res.data.message)
      }
      
    } catch (error) {
      console.log(error.message);

      toast.error(error.message.data.message)
      
    }
  }

  useEffect(()=>{
    const fetchSingleJobs=async ()=>{
        try {
            const res=await axios.get(`${JOB_API_END_POINT}/get/${jobid}`,{withCredentials:true});
            console.log(res.data);
            
            if(res.data.success){
                dispatch(setSingleJob(res.data.data))
                setisApplied(res.data.data.applications.some(application=>application.applicant==user?._id))
            }
            
        } catch (error) {
            console.log(error.message);
            
            
        }
    }
    fetchSingleJobs();
 },[jobid,dispatch,user?._id])


  return (
    
    <div className="max-w-7xl mx-auto my-10">
     
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4 ">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.position} Positions
            </Badge>
            <Badge className={"text-red-700 font-bold"} variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className={"text-purple-700 font-bold"} variant="ghost">
              {singleJob?.salary}LPA
            </Badge>
          </div>
        </div>
        <Button  c
        onClick={isApplied?null:applyjobhandler}
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-500 ] hover:bg-blue-800 cursor-pointer"
          }`}
        >
          {isApplied ? "Already Applied " : "Apply Now "}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
      <div className="my-4" >

        <h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>

        <h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>

        <h1 className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>

        <h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800">{singleJob?.expereienceLevel} yrs</span></h1>


        <h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800">{singleJob?.salary}LPA</span></h1>

        <h1 className="font-bold my-1">Total applicants:<span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>

        <h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>



      </div>
    </div>
  );
};

export default JobDescription;
