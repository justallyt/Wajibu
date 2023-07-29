import { NavLink } from "react-router-dom"
import { IoCallSharp } from "react-icons/io5"
import { BsFillEnvelopeFill } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"
import { GrFacebookOption, GrTwitter } from 'react-icons/gr'
import { AiFillInstagram } from "react-icons/ai"
import { RxLinkedinLogo } from "react-icons/rx"
const Footer = () => {
  return (
    <footer>
               <div className="inner-row">
                         <div className="footer-content">
                                    <div className="footer-intro">
                                                 <div className="logo">
                                                          <h2>PazaLab</h2>
                                                 </div>
                                                 <p>We&apos;re in the business of creating outsanding web projects in the market.</p>
                                    </div>

                                    <div className="footer-content-row">
                                                <div className="footer-column first">
                                                          <h1>Let&apos;s <span>work</span> together.</h1>
                                                          <p className="hook">Would you like to create a web project that would strengthen your online presence? Or already have one and you&apos;re looking to revamp? Or you are not sure where to start?</p>

                                                          <NavLink to={'/'}>Let&apos;s Talk.</NavLink>
                                                </div>
                                                <div className="other-columns-row">
                                                                   <div className="footer-column">
                                                            <h2 className="footer-title">Main Pages</h2>
                                                             <ul>
                                                                     <li><NavLink to={'/'}>Who We are</NavLink></li>
                                                                     <li><NavLink to={'/'}>What We do</NavLink></li>
                                                                     <li><NavLink to={'/'}>Work</NavLink></li>
                                                                     <li><NavLink to={'/'}>Articles</NavLink></li>
                                                                     <li><NavLink to={'/'}>Contact</NavLink></li>
                                                             </ul>
                                                </div>
                                                <div className="footer-column">
                                                           <h2 className="footer-title">Services</h2>
                                                           <ul>
                                                                     <li><NavLink to={'/'}>Website Development</NavLink></li>
                                                                     <li><NavLink to={'/'}>MVP Development</NavLink></li>
                                                                     <li><NavLink to={'/'}>Ecommerce Web Solutions</NavLink></li>
                                                                     <li><NavLink to={'/'}>Search Engine Optimization</NavLink></li>
                                                                     <li><NavLink to={'/'}>Website Maintenance Services</NavLink></li>
                                                                     <li><NavLink to={'/'}>Website Revamp</NavLink></li>
                                                             </ul>
                                                </div>
                                                <div className="footer-column last">
                                                              <h2 className="footer-title">Contact Information</h2>
                                                              <p><span><IoCallSharp /></span> +254 100 938 394</p>
                                                              <p><span><BsFillEnvelopeFill /></span> hello@pazalab.com</p>
                                                              <p><span><FaLocationDot /></span>Nairobi, Kenya</p>

                                                              <div className="footer-social-links">
                                                                       <h4>Connect With Us</h4>
                                                                         <ul>
                                                                                    <li><NavLink to={'/'}><GrFacebookOption /></NavLink></li>
                                                                                    <li><NavLink to={'/'}><GrTwitter /></NavLink></li>
                                                                                    <li><NavLink to={'/'}><AiFillInstagram /></NavLink></li>
                                                                                    <li><NavLink to={'/'}><RxLinkedinLogo /></NavLink></li>
                                                                         </ul>
                                                              </div>
                                                </div>
                                                </div>
                                    </div>

                                    <div className="copyright">
                                                <div className="copyright-text">
                                                          <p>Copyright &copy; {new Date().getFullYear()} Pazalab. All Rights Reserved</p>
                                                </div>
                                                <div className="legal">
                                                           <NavLink to={'/'}>Terms of Service</NavLink>
                                                           <span>|</span>
                                                           <NavLink to={'/'}>Privacy Policy</NavLink>
                                                </div>
                                    </div>
                         </div>
               </div>
    </footer>
  )
}

export default Footer