import React from 'react'
import Latestjobcard from './components/Latestjobcard.jsx'

const randomjobs=[1,2,3,4,5,6,7,8]
const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'><span className='text-blue-500'>Latest & Top </span>Job Openings</h1>
      <div className='grid grid-cols-3 gap-5'>
      {
        randomjobs.slice(0,6).map((item,index)=><Latestjobcard  />)
      }
      </div>
      
    </div>
  )
}

export default LatestJobs
