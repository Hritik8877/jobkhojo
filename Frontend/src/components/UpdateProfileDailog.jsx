import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/userSlice";
import { toast } from "sonner";

const UpdateProfileDailog = ({ open, setopen }) => {
  const [loading, setloading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setinput] = useState({
    fullname: user?.fullname,
    Email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skills) => skills),
    file: user?.profile?.resume,
  });

  const changeEventhandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
 
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("Email", input.Email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        FormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setopen(false);
    }
  };

  const filechangehandler = (e) => {
    const file = e.target.files?.[0];
    setinput({ ...input, file });
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-[425px]"
          onInteractOutside={() => setopen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={SubmitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  type="text"
                  value={input.fullname}
                  id="name"
                  name="fullname"
                  onChange={changeEventhandler}
                  placeholder="Enter the Name"
                  className="col-span-3"
                />
              </div>
            </div>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Email" className="text-right">
                  Email
                </Label>
                <Input
                  type="email"
                  id="Email"
                  name="Email"
                  value={input.Email}
                  onChange={changeEventhandler}
                  placeholder="Enter the Email"
                  className="col-span-3"
                />
              </div>
            </div>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Number" className="text-right">
                  Number
                </Label>
                <Input
                  id="Number"
                  type="number"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventhandler}
                  placeholder="Enter the Number"
                  className="col-span-3"
                />
              </div>
            </div>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  bio
                </Label>
                <Input
                  type="text"
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventhandler}
                  placeholder="Enter the bio"
                  className="col-span-3"
                />
              </div>
            </div>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Skills" className="text-right">
                  Skills
                </Label>
                <Input
                  type="text"
                  id="Skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventhandler}
                  placeholder="Enter the Skills"
                  className="col-span-3"
                />
              </div>
            </div>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="File" className="text-right">
                  File
                </Label>
                <Input
                  id="File"
                  type="file"
                  name="file"
                  accept="application/pdf"
                  onChange={filechangehandler}
                  placeholder="Enter the File"
                  className="col-span-3"
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4 ">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-4">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDailog;
