import WholeNav from "../components/Navigation/WholeNav"
import HeroSection from "../components/HeroSection"
import '../css/home.css'
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
const Home = () => {
  return (
    <>
           <WholeNav />
           <HeroSection />
           <AboutSection />
           <ServicesSection />
    </>
  )
}

export default Home