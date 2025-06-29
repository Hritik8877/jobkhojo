import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/Button'

const HeroSection = () => {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
      <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-blue-500 font-medium'>No. 1 Job Hunt Wibsite</span>
      <h1 className='text-5xl font-bold'>Search, Apply &<br/> Get Your <span className='text-blue-500'>Dream Jobs</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime dignissimos maiores ullam officia?</p>
      <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full gap-4 mx-auto'>
        <input 
        type="text"
        placeholder="Search for job"
        className='outline-none border-none w-full'
        />
        <Button className='rounded-r-full bg-blue-500'>
          <Search className='h-5  w-5'/>
        </Button>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
