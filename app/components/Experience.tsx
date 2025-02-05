import React from "react"

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
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "/javascript.svg",
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: "/css.svg",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: "/react.svg",
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: "/tailwind.svg",
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: "/nextjs.svg",
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: "/github.svg",
      title: "Github",
      style: "shadow-gray-500",
    },
  ]

  return (
    <div id="experience" className="bg-slate-950 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold text-cyan-300 inline">Experience</p>
          <p className="mt-3">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:animate-ping_logo duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="h-20 flex">
                <img src={src} alt="" className="w-20 mx-auto flex" />
              </div>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
