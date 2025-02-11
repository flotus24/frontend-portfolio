"use client"

import React from "react"
import { motion } from "motion/react"

const Experience = () => {
  type Techs = {
    id: number
    src: string
    title: string
    style: string
  }

  const techs: Techs[] = [
    {
      id: 1,
      src: "/html5.svg",
      title: "HTML",
      style: "shadow-orange-500 hover:shadow-orange-400",
    },
    {
      id: 2,
      src: "/javascript.svg",
      title: "Javascript",
      style: "shadow-yellow-600 hover:shadow-yellow-400",
    },
    {
      id: 3,
      src: "/css.svg",
      title: "CSS",
      style: "shadow-blue-600 hover:shadow-blue-400",
    },
    {
      id: 4,
      src: "/react.svg",
      title: "React",
      style: "shadow-blue-500 hover:shadow-blue-300",
    },
    {
      id: 5,
      src: "/tailwind.svg",
      title: "Tailwind",
      style: "shadow-sky-500 hover:shadow-sky-300",
    },
    {
      id: 6,
      src: "/nextjs.svg",
      title: "Next JS",
      style: "shadow-gray-300 hover:shadow-white",
    },
    {
      id: 7,
      src: "/github.svg",
      title: "Github",
      style: "shadow-gray-500 hover:shadow-gray-300",
    },
  ]

  return (
    <div id="experience" className="bg-slate-950 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [50, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-cyan-300 inline"
          >
            Experience
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [25, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1, times: [0.5] }}
            className="font-secondary mt-3"
          >
            These are the technologies I&apos;ve worked with
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, times: [0.5] }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-95 duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="h-20 flex">
                <img src={src} alt="" className="w-12 md:w-20 mx-auto flex" />
              </div>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
