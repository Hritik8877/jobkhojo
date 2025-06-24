import React from 'react'
import Latestjobcard from './components/Latestjobcard.jsx'
import { useSelector } from 'react-redux'

const randomjobs=[1,2,3,4,5,6,7,8]
const LatestJobs = () => {

  const {allJobs}=useSelector(store=>store.job)
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold mb-10' ><span className='text-blue-500'>Latest & Top </span>Job Openings</h1>
      <div className='grid grid-cols-3 gap-5'>
      {
    allJobs.length>0 ?  allJobs.slice(0,6).map((job)=><Latestjobcard key={job._id} job={job} />):<span>No Job Available</span>
      }
      </div>
      
    </div>
  )
}

export default LatestJobs
