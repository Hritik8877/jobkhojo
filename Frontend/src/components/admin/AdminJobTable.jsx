import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { Avatar, AvatarImage } from "../ui/Avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobTable = () => {
  const navigate=useNavigate();
  const {companies,searchcompany} = useSelector((store) => store.company);
  const {alladminjob}=useSelector((store)=>store.job)
  const [filteralladminjob,setfilteralladminjob]=useState(alladminjob);

useEffect(()=>{
  const filteredcompany=alladminjob.length>=0&& alladminjob.filter((job)=>{
    if(!searchcompany){
      return true
    };
    return company?.name.toLowerCase().includes(searchcompany)

  })

  setfilteralladminjob(filteredcompany)


},[companies,searchcompany])
  return (
    <div>
      <Table>
        <TableCaption>A List of your recent Psted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No Companies Found
              </TableCell>
            </TableRow>
          ) : (
            filteralladminjob.map((job) => (
              <TableRow key={job._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={job.Name} />
                  </Avatar>
                </TableCell>
                <TableCell>{job.role}</TableCell>
                <TableCell>
                  {new Date(job.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div onClick={()=>navigate(`/admin/jobs/${job._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobTable;
