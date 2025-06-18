import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import { Button } from "../ui/button";
import { LogOut, Menu, User2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-sm border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-0">
    
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[rgba(2,80,248,0.55)]">Khojo</span>
          </h1>
        </div>

      
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

      
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li className="hover:text-[rgba(2,80,248,0.55)]"><Link to="/">Home</Link></li>
            <li className="hover:text-[rgba(2,80,248,0.55)]"><Link to="/jobs">Jobs</Link></li>
            <li className="hover:text-[rgba(2,80,248,0.55)]"><Link to="/browse">Browse</Link></li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="hover:text-blue-700">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-500 hover:bg-blue-700">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Hritik Kumar</h4>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex flex-col mt-4 space-y-2">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-3 shadow">
          <ul className="flex flex-col font-medium gap-2">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link></li>
            <li><Link to="/browse" onClick={() => setIsOpen(false)}>Browse</Link></li>
          </ul>
          {!user ? (
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/login"><Button variant="outline" onClick={() => setIsOpen(false)}>Login</Button></Link>
              <Link to="/signup"><Button className="bg-blue-500 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Signup</Button></Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-3">
              <Link to="/profile" onClick={() => setIsOpen(false)}><Button variant="link" className="flex items-center gap-2"><User2 />View Profile</Button></Link>
              <Button variant="link" className="flex items-center gap-2"><LogOut />Logout</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
