import React from 'react'
import vid from './assets/Hero.mp4'
import abtimg from './assets/abtimg.jpg'

const Hero = ({ vidsrc = './Hero.mp4' }) => {
  return (
    <>
      <div className="relative h-screen">
        {/* Video element */}
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={vidsrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold m-4 text-center">
            Cultivating Spaces, Crafting Dreams:
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            Where Your Home Journey Begins
          </h1>
          {/* You can add more text or elements here */}
        </div>
      </div>
    </>
  )
}

export default Hero
