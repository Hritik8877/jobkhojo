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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobTable = () => {
  const navigate = useNavigate();
  const { alladminjob, searchjobbytext } = useSelector((store) => store.job);
  const [filteralladminjob, setfilteralladminjob] = useState([]);

  useEffect(() => {
    const filtered = alladminjob.filter((job) => {
      const query = searchjobbytext?.toLowerCase() || "";
      return (
        job?.title?.toLowerCase().includes(query) ||
        job?.company?.name?.toLowerCase().includes(query)
      );
    });

    setfilteralladminjob(filtered);
  }, [alladminjob, searchjobbytext]);

  return (
    <div>
      <Table>
        <TableCaption>A List of your recently posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteralladminjob.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No jobs found
              </TableCell>
            </TableRow>
          ) : (
            filteralladminjob.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.company?.name || "N/A"}</TableCell>
                <TableCell>{job.title || "N/A"}</TableCell>
                <TableCell>
                  {job.createdAt
                    ? new Date(job.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        onClick={() => navigate(`/admin/jobs/${job._id}`)}
                        className="flex items-center gap-2 w-fit cursor-pointer"
                      >
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
