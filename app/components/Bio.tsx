"use client"

import React from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
import { motion } from "motion/react"

const Bio = () => {
  return (
    <div
      id="home"
      className="h-[100vh] md:h-[90vh] w-full bg-gradient-to-b bg-slate-950"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [150, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-center font-bold"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-cyan-300">
            I&apos;m a Frontend Developer
          </h2>
          <p className="font-secondary text-gray-300 py-4 max-w-md">
            Weaving design and code to create captivating websites
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md text-lg bg-sky-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 group-hover:-translate-y-1 delay-75 duration-300">
                <HiOutlineArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pt-7 md:pt-0"
        >
          <img
            src="/myimage.jpeg"
            alt="My Profile"
            className="rounded-2xl mx-auto sm:w-2/3 md:w-3/4"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Bio
