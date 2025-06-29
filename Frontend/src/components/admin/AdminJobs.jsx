import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setsearchjobbytext } from '@/redux/jobSlice'
import AdminJobTable from './AdminJobTable'
import useGetAllAdminJob from '@/hooks/useGetAllAdminJob'

const AdminJobs = () => {
  useGetAllAdminJob();
  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setsearchjobbytext(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-fit"
            placeholder="filter by name,role"
            onChange={(e) => setinput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            New Job
          </Button>
        </div>
        <AdminJobTable />
      </div>
    </div>
  )
}

export default AdminJobs
