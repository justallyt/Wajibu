import WholeNav from "../components/Navigation/WholeNav"
import HeroSection from "../components/HeroSection"
import '../css/home.css'
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ProjectSection from "../components/ProjectSection"
const Home = () => {
  return (
    <>
           <WholeNav />
           <HeroSection />
           <AboutSection />
           <ServicesSection />
           <ProjectSection />
    </>
  )
}

export default Home