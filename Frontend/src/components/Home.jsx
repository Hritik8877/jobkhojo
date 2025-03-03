import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarouser from '@/CategoryCarouser'
import LatestJobs from '@/LatestJobs'
import Footer from '@/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarouser/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
