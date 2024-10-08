'use client'

import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll"

const Bio = () => {
  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center font-bold">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I&apos;m a Frontend Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have recently graduated with a degree in Computer Science at Universitas Pendidikan Indonesia with a GPA of 3.76.
            I am now interested in front-end development and have worked with React, Next.js, Bootstrap, and Tailwind.
            On my latest project I made a GIS website that visualize drought map with next.js and also deployed my own localhost server with node.js and express.js.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 group-hover:-translate-y-1 delay-75 duration-300">
                <HiOutlineArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="pt-7 md:pt-0">
          <img src="/myimage.jpeg" alt="My Profile" className="rounded-2xl mx-auto sm:w-2/3 md:w-3/4" />
        </div>
      </div>
    </div>
  )
}

export default Bio