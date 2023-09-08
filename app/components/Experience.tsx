import React from 'react'

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: "/html5.svg",
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: "/javascript.svg",
      title: "Javascript",
      style: "shadow-yellow-500"
    },
    {
      id: 3,
      src: "/css.svg",
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 4,
      src: "/react.svg",
      title: "React",
      style: "shadow-blue-500"
    },
    {
      id: 5,
      src: "/tailwind.svg",
      title: "Tailwind",
      style: "shadow-sky-500"
    },
    {
      id: 6,
      src: "/next.svg",
      title: "Next JS",
      style: "shadow-white py-8"
    },
    {
      id: 7,
      src: "/github.svg",
      title: "Github",
      style: "shadow-gray-500"
    },
  ]

  return (
    <div id="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">These are the technologies I&apos;ve worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience