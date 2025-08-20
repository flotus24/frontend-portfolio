"use client";

import React from "react";
import { motion } from "motion/react";

const Portfolio = () => {
  type Portfolio = {
    id: number;
    src: string;
    link?: string;
    code: string;
    desc: string;
  };

  const portfolios: Portfolio[] = [
    {
      id: 1,
      src: "/realtime-chat.PNG",
      link: "https://rifqi367.com",
      code: "https://github.com/flotus24/jamazon",
      desc: "A real-time chat application leveraging Next.js for a responsive frontend, NestJS for a scalable backend, and Socket.IO to enable efficient, bidirectional communication.",
    },
    {
      id: 2,
      src: "/burger-joint.png",
      link: "https://burger-joint-demo.netlify.app/",
      code: "https://github.com/flotus24/burger-joint",
      desc: "Single page website for a trendy burger restaurant with modern design using latest gsap animation.",
    },
    {
      id: 3,
      src: "/jamazon.PNG",
      code: "https://github.com/flotus24/jamazon",
      desc: "Jamazon, an e-commerce website inspired by Amazon and Tokopedia, a platform that combines user-friendly design and vast product selection.",
    },
    {
      id: 4,
      src: "/land_map.PNG",
      code: "https://github.com/flotus24/Land-Map",
      desc: "Land Map was made as a product of a thesis where it aims to centralize the mapping of the earth's surface, especially drought, on a website with the help of remote sensing.",
    },
    {
      id: 5,
      src: "/ocors.PNG",
      code: "https://github.com/naufal58/OCORS/tree/main/OCORS",
      desc: "OCORS stand for Online Comic Reader and Store is a website that our team developed to read and buy comic so reader can read and buy comic legally and easily through our portal.",
    },
  ];

  return (
    <div id="portfolio" className="bg-slate-950 w-full text-white md:h-[120vh]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [50, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-cyan-300"
          >
            Portfolio
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [25, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1, times: [0.5] }}
            className="font-secondary mt-3"
          >
            Check out some of my work right here
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, times: [0.5] }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20 sm:pb-0"
        >
          {portfolios.map(({ id, src, link, code, desc }) => (
            <div
              key={id}
              className="shadow-md lg:w-[300px] lg:h-[410px] shadow-gray-600 rounded-lg"
            >
              <div className="sm:h-[170px] md:h-[160px] content-center rounded-md">
                <img
                  src={src}
                  alt=" "
                  className="rounded-md duration-200 hover:scale-105 w-[100%] lg:w-[300px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="sm:h-[175px]">
                  <p className="font-secondary py-3 px-3">{desc}</p>
                </div>
                <div className="flex">
                  {link && (
                    <div
                      className={`hover:animate-pulse center m-4 duration-200 hover:scale-105 text-white w-fit px-3 py-1 flex items-center rounded-md bg-sky-500 cursor-pointer`}
                    >
                      <a href={link} target="_blank">
                        Link
                      </a>
                    </div>
                  )}
                  <div
                    className={`hover:animate-pulse center m-4 duration-200 hover:scale-105 text-white w-fit px-3 py-1 flex items-center rounded-md bg-sky-500 cursor-pointer`}
                  >
                    <a href={code} target="_blank">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
