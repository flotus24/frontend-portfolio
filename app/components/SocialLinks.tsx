import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {

  type Link = {
    id: number,
    child: any,
    href: string,
    style?: string
  }

  const links: Link[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/m-rifqi367/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/flotus24",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://docs.google.com/document/d/1NB3_bUNlI5FrMp3xilP4oARvWgZKzHjbdtoZzS2g4RU/edit",
      style: "rounded-br-md",
    },
  ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
