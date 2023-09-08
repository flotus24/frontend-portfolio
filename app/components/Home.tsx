'use client'

import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center font-bold">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I&apos;m a Frontend Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Student of computer science at Universitas Pendidikan Indonesia. Until semester 8,
            I have accumulated 3.75 GPA and worked with few projects in C and python language.
            I am now interested in front-end development and have worked with React, Next.js, Bootstrap, and Tailwind.
            {/* I have experience using Pandas and Matplotlib to analyze data libraries by 
                    enhancing analytics and modeling for quality visualizations. I also have experience using 
                    scikit-learn library utilizing decision tree classifier to make classification models. 
                    I have enrolled in 2022 bangkit in machine learning and it provided me with valuable knowledge. 
                    I love solving problems because for me it is just like solving puzzles. */}
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src="/myimage.jpeg" alt="My Profile" className="rounded-2xl mx-auto w-2/3 md:w-3/4" />
        </div>
      </div>
    </div>
  )
}

export default Home