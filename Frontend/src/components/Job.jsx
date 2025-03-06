import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
      <div className='flex justify-between items-center'>
      <p className='text-sm text*gray-500'>2 days ago</p>
      <Button varient='outline' className='rounded-full 'size='icon'> <Bookmark/></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
      <Button>
        <Avatar>
            <AvatarImage  src='https://static.vecteezy.com/system/resources/previews/019/466/990/non_2x/dell-logo-on-white-background-free-vector.jpg'/>

        </Avatar>
      </Button>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint numquam quibusdam optio cupiditate libero recusandae.</p>
      </div>
      <div className='flex items-center gap-2 mt-4 '>
                  <Badge className={'text-blue-700 font-bold'} variant='ghost'>12 Positions</Badge>
                  <Badge className={'text-red-700 font-bold'} variant='ghost'>Part Time</Badge>
                  <Badge className={'text-purple-700 font-bold'} variant='ghost'>24LPA</Badge>
        </div>
        <div className='flex items-center gap-4' >
            <Button variant='outline'>
                Details
            </Button>
            <Button className="bg-blue-700">Save For Later</Button>
        </div>
    </div>
  )
}

export default Job
