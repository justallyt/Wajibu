import WholeNav from "../components/Navigation/WholeNav"
import "../css/services.css"
import service1 from "../assets/services2.jpg"
import service2 from '../assets/services3.jpg'
import ServicesBody from "../components/ServicesBody"
import Nudge from "../components/Nudge"
import Footer from "../components/Footer"
const Services = () => {
  return (
    <>
           <WholeNav />
           <div className="service-body-section">
                    <div className="inner-row">
                              <div className="service-hero">
                                        <div className="service-hero-texts">
                                                  <h3>What We Do</h3>
                                                   <h1>Let&apos;s Build and Transform the Web Together</h1>
                                                   <p>We know how to build successful websites and web apps for businesses and organizations by connecting the dots between users&apos; needs and the client&apos;s business model.</p>
                                        </div>
                                        <div className="service-images">
                                                  <img src={service1} alt="" />
                                                  <img src={service2} alt="" />
                                        </div>
                              </div>
                    </div>
           </div>
           <ServicesBody />
           <Nudge />
           <Footer />
    </>
  )
}

export default Services