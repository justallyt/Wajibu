import AboutDescription from "../components/AboutDescription"
import AboutIntro from "../components/AboutIntro"
import WholeNav from "../components/Navigation/WholeNav"
import "../css/about.css"
const About = () => {
  return (
      <>
           <WholeNav />
           <AboutIntro />
           <AboutDescription />
      </>
  )
}

export default About