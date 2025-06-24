import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setsingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [companyName,SetCompanyName]=useState();
  const registernewCompany=async()=>{
    try {
      const res=await axios.post(`${COMPANY_API_END_POINT}/register`,{CompanyName: companyName},{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      if(res?.data.success){
        dispatch(setsingleCompany(res.data?.company))
        toast.success(res.data.message);
        const cid=res?.data?.company?._id;
        navigate(`/admin/company/${cid}`);


      }
    } catch (error) {
      console.log(error.message);
      
      
    }
  }
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
        <p className="text-gray-500">
          What would you like to give your company ? you can change this later{" "}
        </p>

        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobKhojo,Flipcart etc."
          onChange={(e)=>SetCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
          <Button onClick={registernewCompany}>Continue</Button>

        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
