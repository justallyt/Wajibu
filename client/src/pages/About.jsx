import AboutDescription from "../components/AboutDescription"
import AboutIntro from "../components/AboutIntro"
import WholeNav from "../components/Navigation/WholeNav"
import Process from "../components/Process"
import "../css/about.css"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
const About = () => {
  return (
      <>
           <WholeNav />
           <AboutIntro />
           <AboutDescription />
           <Process />
           <Testimonials />
           <Footer />
      </>
  )
}

export default About