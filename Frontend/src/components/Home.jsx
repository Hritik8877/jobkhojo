import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarouser from '@/CategoryCarouser'
import LatestJobs from '@/LatestJobs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarouser/>
      <LatestJobs/>
    </div>
  )
}

export default Home
