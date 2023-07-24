import serviceImg from "../assets/services1.jpg"
import webdev from "../assets/icons/webdev.png"
import revamp from "../assets/icons/revamp.png"
import ecommerce from "../assets/icons/ecommerce.png"
import webapp from "../assets/icons/webapp.png"
import seo from "../assets/icons/seo-opt.png"
import maintenance from "../assets/icons/maintenance.png"
import { HiOutlineArrowRight } from "react-icons/hi"
import { NavLink } from "react-router-dom"
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
                                                   <div className="thin-column">
                                                               <div className="service-box-moja ml-adjust">
                                                                           <div className="icon">
                                                                                     <img src={webdev} alt="Ecommerce Icon" />
                                                                            </div>
                                                                           <h2>Website Creation from Scratch</h2>
                                                                           <NavLink to={'/'}><span><HiOutlineArrowRight /></span></NavLink>
                                                              </div>
                                                              <div className="service-box-moja mb-adjust">
                                                                            <div className="icon">
                                                                                     <img src={revamp} alt="Ecommerce Icon" />
                                                                            </div>
                                                                            <h2>Website Redesign & Revamption</h2>
                                                                            <NavLink to={'/'}><span><HiOutlineArrowRight /></span></NavLink>
                                                              </div>
                                                   </div>
                                                   <div className="wide-column">
                                                                <div className="service-image-part">
                                                                             <img src={serviceImg} alt="" />
                                                                </div>

                                                                <div className="service-constituents">
                                                                              <div className="service-box-moja">
                                                                                           <div className="icon">
                                                                                                    <img src={ecommerce} alt="Ecommerce Icon" />
                                                                                           </div>
                                                                                           <h2>Ecommerce Web Solutions</h2>
                                                                                           <NavLink to={'/'}><span><HiOutlineArrowRight /></span></NavLink>
                                                                              </div>
                                                                              <div className="service-box-moja mb-adjust">
                                                                                           <div className="icon">
                                                                                                    <img src={webapp} alt="Ecommerce Icon" />
                                                                                           </div>
                                                                                           <h2>Web Applications & MVP Development</h2>
                                                                                           <NavLink to={'/'}><span><HiOutlineArrowRight /></span></NavLink>
                                                                              </div>
                                                                </div>
                                                   </div>
                                                   <div className="thin-column">
                                                           <div className="service-box-moja">
                                                                           <div className="icon">
                                                                                     <img src={seo} alt="Ecommerce Icon" />
                                                                            </div>
                                                                           <h2>Search Engine Optimization</h2>
                                                                           <NavLink to={'/'}><span><HiOutlineArrowRight /></span></NavLink>
                                                              </div>
                                                              <div className="service-box-moja mb-adjust">
                                                                            <div className="icon">
                                                                                     <img src={maintenance} alt="Ecommerce Icon" />
                                                                            </div>
                                                                            <h2>Website Maintenance Services</h2>
                                                                            <NavLink to={'/'}><span><HiOutlineArrowRight /></span></NavLink>
                                                              </div>
                                                   </div>
                                      </div>
                           </div>
              </div>
    </div>
  )
}

export default ServicesSection