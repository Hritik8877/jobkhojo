import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user=false;
  return (
    <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
      <div>
        <h1 className="text-2xl font-bold">
          Job<span className="text-[rgba(2,80,248,0.55)]">Khojo</span>
        </h1>
      </div>
      <div className="flex items-center gap-12">
        <ul className="flex font-medium items-center gap-5">
          <li className="hover:text-[rgba(2,80,248,0.55)]"><Link to="/">Home</Link></li>
          <li className="hover:text-[rgba(2,80,248,0.55)]"><Link to="/jobs">Jobs</Link></li>
          <li className="hover:text-[rgba(2,80,248,0.55)]"><Link to="/browse">Browse</Link></li>
        </ul>
          {
            !user?(
              <div>
                <Link to="/login"><Button variant="outLine" className=" hover:text-blue-700"> Login</Button></Link>
                <Link to ="/signup"><Button className="bg-blue-500 hover:bg-blue-700">Signup</Button></Link>
                
              </div>
            ):(
              <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
              <div>
                <h4 className="font-medium">Hritik Kumar</h4>
                <p className="text-sm m-y-2 text-gray-500">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
           <div className="flex flex-col  ">
           <div className="flex w-fit items-center gap-2 cursor-pointer">
            <User2/>
           <Button variant="link" >View Profile</Button>
           </div>
           <div className="flex w-fit items-center gap-2 cursor-pointer">
            <LogOut/>
           <Button variant="link" >Logout</Button>
           </div>
          
           </div>
           

          </PopoverContent>
        </Popover>
            )

            
          }

        
      </div>
    </div>
  );
};

export default Navbar;
