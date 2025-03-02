import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const Login = () => {

  const [input,setinput]=useState({
      email:"",
      password:"",
      role:"",
    });

    const navigate=useNavigate();
  
    const changeeventhandler=(e)=>{
      setinput({...input,[e.target.name]:e.target.value})
  
    }
   

    const submithandler=async (e)=>{
      e.preventDefault();
     
      try {
        console.log(input);
        const res=await  axios.post(`http://localhost:5000/api/user/login`,input,{
          headers:{
            "Content-Type":"application/json"
          },
          //withCredentials:true
        });
        if(res.data.success){
          console.log(res.data);
          navigate("/")
          toast.success(res.data.message)
          
        }
        
      } catch (error) {
        console.log(error);
        
        
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
          <h1 className="font-bold text-xl mb-5">Login</h1>

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
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
              
              

          </div>

          <Button type="submit"  className="w-full my-4">Login</Button>
          <span className="text-sm">Dont't have an account? <Link to="/Signup" className="text-blue-800">Signup</Link></span>
          
        </form>
      </div>
    </div>
  );
};

export default Login;

