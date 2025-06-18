import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDailog from "./UpdateProfileDailog";

const Profile = () => {
  const [open,setopen]=useState(false)
  const skills = ["Html", "css", "JavaScript", "React"];
  const isReume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://static.vecteezy.com/system/resources/previews/019/466/990/non_2x/dell-logo-on-white-background-free-vector.jpg"
                alt="profile pic"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                consequatur?
              </p>
            </div>
          </div>
          <Button  onClick={()=>setopen(true)}
            className="text-right bg-white text-black hover:text-white"
            varient="outline"
          >
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-4 my-2">
            <Mail />
            <span>Hritik@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact />
            <span>8409397263</span>
          </div>
        </div>

        <div className="my-5">
          <h1>Skills</h1>
          {skills.length != 0 ? (
            skills.map((item, idx) => (
              <Badge key={idx} className="mx-2">
                {item}
              </Badge>
            ))
          ) : (
            <span>N/A</span>
          )}
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isReume ? (
            <a href="/https://youtube.com" target="blank" className="text-blue-500 w-full hover:underline">
              Resume.pdf
            </a>
          ) : (
            <span>N/A</span>
          )}
        </div>

        
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
         <AppliedJobTable/>
          

        </div>

    <UpdateProfileDailog open={open} setopen={setopen}/>

    </div>
  );
};

export default Profile;
