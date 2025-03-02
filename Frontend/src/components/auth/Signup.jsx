import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {
  const [input,setinput]=useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
     file:""
  });

  const navigate=useNavigate();

  const changeeventhandler=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})

  }
  const changeeventfilehandler=(e)=>{
    setinput({...input,file:e.target.files?.[0]})
  }

  const submithandler=async (e)=>{
    e.preventDefault();
   const formdata=new FormData();
   formdata.append("fullname",input.fullName)
   formdata.append("email",input.email)
   formdata.append("phoneNumber",input.phoneNumber)
   formdata.append("password",input.password)
   formdata.append("role",input.role)
   if(input.file){
    formdata.append("file",input.file)
   }
    try {
      console.log(input);
      const res=await  axios.post(`${USER_API_END_POINT}/register`,formdata,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      });
      if(res.data.success){
        console.log(res.data);
        navigate("/Login")
        toast.success(res.data.message)
        
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
      
    }
    
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submithandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullName}
              name="fullName"
              onChange={changeeventhandler}
              placeholder="Hritik"
              
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeeventhandler}
              placeholder="Email@gmail.com"
              
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeeventhandler}
              placeholder="8409397263"
              
            />
          </div>
          <div className="my-2">
            <Label>password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeeventhandler}
              placeholder="Hritik"
              
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role==="student"}
                onChange={changeeventhandler}
                className="cursor-pointer"
                />
                <Label htmlFor="option-one">student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role==="recruiter"}
                onChange={changeeventhandler}
                className="cursor-pointer"
                />
                <Label htmlFor="option-two">recruiter</Label>
              </div>
            </RadioGroup>
              
              <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                 accept="image/*"
                 type="file"
                 name="file"
                 onChange={changeeventfilehandler}
                 className="cursor-pointer"
                />
              </div>
              

          </div>

          <Button type="submit"  className="w-full my-4">Signup</Button>
          <span className="text-sm">Already have an account? <Link to="/Login" className="text-blue-800">Login</Link></span>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
