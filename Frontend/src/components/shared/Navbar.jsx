import React, { useState, useCallback } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/Popover";
import { Avatar, AvatarImage } from "../ui/Avatar.jsx";
import { Button } from "../ui/Button";
import { LogOut, Menu, User2, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "@/redux/userSlice";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logouthandler = useCallback(async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, navigate]);

  return (
    <header className="w-full shadow-sm border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-0">
        <h1 className="text-2xl font-bold">
          Job<span className="text-[rgba(2,80,248,0.55)]">Khojo</span>
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user?.role === "recruiter" ? (
              <>
                <li className="hover:text-[rgba(2,80,248,0.55)]">
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className="hover:text-[rgba(2,80,248,0.55)]">
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-[rgba(2,80,248,0.55)]">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[rgba(2,80,248,0.55)]">
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="hover:text-[rgba(2,80,248,0.55)]">
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="hover:text-blue-700">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-500 hover:bg-blue-700">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.prfilephoto || "https://ui-avatars.com/api/?name=User"}
                    alt="User Avatar"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80" role="menu">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.prfilephoto || "https://ui-avatars.com/api/?name=User"}
                      alt="User Avatar"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col mt-4 space-y-2">
                  {user?.role === "student" && (
                    <div className="flex items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logouthandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      {/* Mobile Menu Content */}
     {isOpen && (
  <div className="md:hidden bg-white px-4 py-3 space-y-3 shadow">
    <ul className="flex flex-col font-medium gap-2">
      {user?.role === "recruiter" ? (
        <>
          <li>
            <Link to="/admin/companies" onClick={() => setIsOpen(false)}>Companies</Link>
          </li>
          <li>
            <Link to="/admin/jobs" onClick={() => setIsOpen(false)}>Jobs</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link>
          </li>
          <li>
            <Link to="/browse" onClick={() => setIsOpen(false)}>Browse</Link>
          </li>
        </>
      )}
    </ul>

    {!user ? (
      <div className="flex flex-col gap-2 mt-2">
        <Link to="/login">
          <Button variant="outline" onClick={() => setIsOpen(false)}>Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-blue-500 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Signup</Button>
        </Link>
      </div>
    ) : (
      <div className="flex flex-col gap-2 mt-3">
        {user?.role === "student" && (
          <Link to="/profile" onClick={() => setIsOpen(false)}>
            <Button variant="link" className="flex items-center gap-2">
              <User2 /> View Profile
            </Button>
          </Link>
        )}
        <Button
          variant="link"
          className="flex items-center gap-2"
          onClick={() => {
            logouthandler();
            setIsOpen(false);
          }}
        >
          <LogOut /> Logout
        </Button>
      </div>
    )}
  </div>
)}

    </header>
  );
};

export default Navbar;
