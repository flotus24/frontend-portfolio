import Navbar from "./components/Navbar"
import Bio from "./components/Bio"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"


export default function Home() {
  return (
    <div>
      <Navbar />
      <Bio />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  )
}


