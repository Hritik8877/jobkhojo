import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Link, useNavigate } from 'react-router-dom'


const Job = ({job}) => {
  const navigate=useNavigate();
  // const JobId="kbjgvfdhkv"
  const daysago=(mongodbtime)=>{
    const createdAt=new Date(mongodbtime)
    const currenttime=new Date();
    const timefiff=currenttime-createdAt;
    return Math.floor(timefiff/(1000*24*60*60))
  }

  return (
   
    <div className=' p-5 rounded-md shadow-xl bg-white border border-gray-200'>
      <div className='flex justify-between items-center'>
      <p className='text-sm text*gray-500'>{daysago(job?.createdAt)==0 ? "Today":`${daysago(job?.createdAt)}`} days ago</p>
      <Button varient='outline' className='rounded-full 'size='icon'> <Bookmark/></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
    
        <Avatar>
            <AvatarImage  src='https://static.vecteezy.com/system/resources/previews/019/466/990/non_2x/dell-logo-on-white-background-free-vector.jpg'/>

        </Avatar>
    
      <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4 '>
                  <Badge className={'text-blue-700 font-bold'} variant='ghost'>{job?.position} Positions</Badge>
                  <Badge className={'text-red-700 font-bold'} variant='ghost'>{job?.jobType}</Badge>
                  <Badge className={'text-purple-700 font-bold'} variant='ghost'>{job?.salary}LPA</Badge>
        </div>
        <div className='flex items-center gap-4 space-y-2' >
            <Button variant='outline' onClick={()=>navigate(`/description/${job?._id}`)}>
               Details
            </Button>
            <Button className="bg-blue-700">Save For Later</Button>
        </div>
    </div>
  )
}

export default Job
