import React from "react"

const Portfolio = () => {
  type Portfolio = {
    id: number
    src: string
    link: string
    desc: string
  }

  const portfolios: Portfolio[] = [
    {
      id: 1,
      src: "/jamazon.PNG",
      link: "https://github.com/flotus24/DeteksiCovid",
      desc: "Jamazon, an e-commerce website inspired by Amazon and Tokopedia, a platform that combines user-friendly design and vast product selection.",
    },
    {
      id: 2,
      src: "/land_map.PNG",
      link: "https://github.com/flotus24/Land-Map",
      desc: "Land Map was made as a product of a thesis where it aims to centralize the mapping of the earth's surface, especially drought, on a website with the help of remote sensing.",
    },
    {
      id: 3,
      src: "/ocors.PNG",
      link: "https://github.com/naufal58/OCORS/tree/main/OCORS",
      desc: "OCORS stand for Online Comic Reader and Store is a website that our team developed to read and buy comic so reader can read and buy comic legally and easily through our portal.",
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
          {portfolios.map(({ id, src, link, desc }) => (
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
                  <p className="py-3 px-3">{desc}</p>
                </div>
                <div
                  className={`hover:animate-pulse center m-4 duration-200 hover:scale-105 text-white w-fit px-3 py-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer`}
                >
                  <a href={link} target="_blank">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
