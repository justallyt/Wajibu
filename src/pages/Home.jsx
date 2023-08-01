import WholeNav from "../components/Navigation/WholeNav"
import HeroSection from "../components/HeroSection"
import '../css/home.css'
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ProjectSection from "../components/ProjectSection"
import Reasons from "../components/Reasons"
import Testimonials from "../components/Testimonials"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
           <WholeNav />
           <HeroSection />
           <AboutSection />
           <ServicesSection />
           <ProjectSection />
           {/* <Reasons />
           <Testimonials />
           <BlogSection />
           <Footer /> */}
    </>
  )
}

export default Home