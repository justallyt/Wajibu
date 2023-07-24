import serviceImg from "../assets/services1.jpg"
import webdev from "../assets/icons/webdev.png"
import revamp from "../assets/icons/revamp.png"
import ecommerce from "../assets/icons/ecommerce.png"
import webapp from "../assets/icons/webapp.png"
import seo from "../assets/icons/seo-opt.png"
import maintenance from "../assets/icons/maintenance.png"

const ServicesSection = () => {
  return (
    <div className="services-section">
              <div className="inner-row">
                           <div className="services-section-content">
                                      <div className="intro">
                                               <h3>What We do</h3>
                                               <h1>We turn your Ideas into Elegant designs and great experiences.</h1>
                                      </div>

                                      <div className="services-section-row">
                                                   <div className="thin-column"></div>
                                                   <div className="wide-column">
                                                                <div className="service-image-part">
                                                                             <img src={serviceImg} alt="" />
                                                                </div>

                                                                <div className="service-constituents">
                                                                              <div className="service-box-moja">
                                                                                           
                                                                              </div>
                                                                </div>
                                                   </div>
                                                   <div className="thin-column"></div>
                                      </div>
                           </div>
              </div>
    </div>
  )
}

export default ServicesSection