import React from "react"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "/dataindoss.PNG",
      style: "hidden",
      desc: "Data Indonesia is a portal that focuses on presenting comprehensive data and analysis I worked on with other developers at Smartek Sistem as a Frontend Developer apprentice."
    },
    {
      id: 2,
      src: "/ocors.PNG",
      link: "https://github.com/naufal58/OCORS/tree/main/OCORS",
      desc: "OCORS stand for Online Comic Reader and Store is a website that our team developed to read and buy comic so reader can read and buy comic legally and easily through our portal."
    },
    {
      id: 3,
      src: "/deteksicovid.PNG",
      link: "https://github.com/flotus24/DeteksiCovid",
      desc: "DeteksiCovid is a website that our team developed to inform the public community about Covid-19 and make an appointment and payment with a local hospital through the website to check Covid-19 with a Swab test or Rapid test.",
    },
  ]

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20 sm:pb-0">
          {portfolios.map(({ id, src, style, link, desc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg bg-black to-gray-800 bg-gradient-to-b">
              <img
                src={src}
                alt=" "
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center ">
                {/* <button className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${style}`}>
                  Demo
                </button> */}
                <div className="sm:h-[220px]">
                  <p className="py-3 px-3">{desc}</p>
                </div>
                <a
                  href={link}
                  className={`center m-4 duration-200 hover:scale-105 ${style} px-2 py-1 border rounded-xl`}
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
