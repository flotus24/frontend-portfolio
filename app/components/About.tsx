import React from "react"

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I am highly motivated, eager to learn new technologies and always looking for ways to improve my skills.
          I am also a quick learner and confident that I have the skills and experience that you are looking for in a Frontend Developer. I can handle day to day English conversation.
          I am eager to leverage my expertise and contribute to any company&apos;s mission and success.
        </p>
      </div>
    </div>
  )
}

export default About
