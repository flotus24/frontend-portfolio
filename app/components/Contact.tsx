"use client"

import React from "react"
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div id="contact" className="w-full h-[95vh] bg-slate-900 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [50, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-cyan-300"
          >
            Contact
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [25, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1, times: [0.5] }}
            className="font-secondary mt-3"
          >
            Submit the form below to get in touch with me
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, times: [0.5] }}
          className="flex justify-center items-center"
        >
          <form
            action="https://getform.io/f/878864e4-fd77-4dfe-be31-7d859c3af2bd"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={5}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-sky-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let&apos;s Talk
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
