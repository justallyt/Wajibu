import WholeNav from "../components/Navigation/WholeNav"
import HeroSection from "../components/HeroSection"
import '../css/home.css'
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ProjectSection from "../components/ProjectSection"
import Reasons from "../components/Reasons"
const Home = () => {
  return (
    <>
           <WholeNav />
           <HeroSection />
           <AboutSection />
           <ServicesSection />
           <ProjectSection />
           <Reasons />
    </>
  )
}

export default Home