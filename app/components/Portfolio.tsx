"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Portfolio = () => {
  type Portfolio = {
    id: number;
    name: string;
    src: string;
    link?: string;
    code?: string;
    desc: string;
  };

  const portfolios: Portfolio[] = [
    {
      id: 1,
      name: "Subkom",
      src: "/subkom.PNG",
      link: "https://subkom.co.id/",
      desc: "Freelance project for a computer hardware store delivering a responsive single-page website using React, GSAP, implementing optimized SEO strategies to improve search visibility.",
    },
    {
      id: 2,
      name: "Steam Trace",
      src: "/steam-trace.png",
      link: "https://steam-trace.vercel.app/",
      code: "https://github.com/flotus24/steam-trace",
      desc: "Shareable retrospective platform that transforms your Steam gameplay history into a personalized recap card by linking your account through a secure, single-click Steam login.",
    },
    {
      id: 3,
      name: "Burger Joint",
      src: "/burger-joint.png",
      link: "https://burger-joint-demo.netlify.app/",
      code: "https://github.com/flotus24/burger-joint",
      desc: "Single page website for a trendy burger restaurant with modern design using latest gsap animation.",
    },
    {
      id: 4,
      name: "Real-time Chat",
      src: "/realtime-chat.PNG",
      code: "https://github.com/flotus24/realtime-chat",
      desc: "A real-time chat application leveraging Next.js for a responsive frontend, NestJS for a scalable backend, and Socket.IO to enable efficient, bidirectional communication.",
    },
    {
      id: 5,
      name: "Land Map",
      src: "/land_map.PNG",
      code: "https://github.com/flotus24/Land-Map",
      desc: "Land Map was made as a product of a thesis where it aims to centralize the mapping of the earth's surface, especially drought, on a website with the help of remote sensing.",
    },
    {
      id: 6,
      name: "Ooze",
      src: "/ooze.PNG",
      code: "https://github.com/flotus24/ooze",
      link: "https://flotusooze.netlify.app/",
      desc: "Single page website with modern and trendy interface made with the help of Google AI Studio.",
    },
  ];

  return (
    <div id="portfolio" className="bg-slate-950 w-full py-10 text-white">
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
          {portfolios.map(({ id, name, src, link, code, desc }) => (
            <div
              key={id}
              className="shadow-md lg:w-[300px] lg:h-[410px] shadow-gray-600 rounded-md"
            >
              <div className="content-center rounded-md">
                <Image
                  src={src}
                  alt={name}
                  width={310}
                  height={180}
                  className="rounded-md duration-200 hover:scale-105 aspect-video"
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
                  {code && (
                    <div
                      className={`hover:animate-pulse center m-4 duration-200 hover:scale-105 text-white w-fit px-3 py-1 flex items-center rounded-md bg-sky-500 cursor-pointer`}
                    >
                      <a href={code} target="_blank">
                        Code
                      </a>
                    </div>
                  )}
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
