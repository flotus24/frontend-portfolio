"use client";

import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-[60vh] bg-slate-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [50, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-cyan-300"
        >
          About
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [25, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1, times: [0.5] }}
          className="font-secondary md:text-xl mt-3"
        >
          Graduated with a degree in Computer Science at Universitas Pendidikan
          Indonesia with a GPA of 3.76. On my final project as a bachelor
          student I made a GIS website that visualize drought map with next.js
          and backend with NodeJS and ExpressJS. I am highly motivated, eager to
          learn new technologies and always looking for ways to improve my
          skills. Recently I started to lexpand my backend knowledge and
          deployed my own website through web server and now interested in
          full-stack development. I have worked with bunch of techs from React,
          NestJS, to Socket.io. I am also a quick learner and confident that I
          have the skills and experience that you are looking for in a Frontend
          Developer. I can handle day to day English conversation. I am eager to
          leverage my expertise and contribute to any company&apos;s mission and
          success.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
