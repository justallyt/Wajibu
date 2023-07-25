import { NavLink } from "react-router-dom"
import { PiDotOutlineFill } from 'react-icons/pi'
import { IoTriangleOutline } from "react-icons/io5"
import { MdOutlineRectangle } from "react-icons/md"
import { CgShapeRhombus, CgShapeCircle, CgShapeHalfCircle, CgShapeZigzag } from "react-icons/cg"
import { FaStarOfLife } from "react-icons/fa"
const HeroSection = () => {
  return (
    <div className="hero-section">
             <div className="inner-row">
                        <div className="bg-patterns">
                                   <div className="bg-patterns-container">
                                               <span className="circle-dot"><CgShapeCircle /></span>
                                               <span className="triangle"><IoTriangleOutline /></span>
                                               <span className="full-dot"><PiDotOutlineFill /></span>
                                               <span className="semi-circle"><CgShapeHalfCircle /></span>
                                               <span className="rectangle"><MdOutlineRectangle /></span>
                                               <div className="rhombus"><CgShapeRhombus /></div>
                                               <span className="bold-star"><FaStarOfLife /></span>
                                               <span className="zigzag"><CgShapeZigzag /></span>
                                   </div>
                        </div>
                       <div className="hero-section-content">
                                 <div className="hero-texts">
                                           <h3><span></span> Dedicated to digital excellence</h3>
                                           <h1>Creating next generation <span>web solutions</span></h1>
                                           <p>PazaLab is a creative web agency that helps you design, build and deploy fascinating user experiences that amplifies your online presence. Our team is committed to delivering high-end web solutions to all clients in Kenya, Africa and across the world. </p>

                                           <div className="hero-btns">
                                                      <div className="btn">
                                                                 <NavLink to={'/'}>Explore Services</NavLink>
                                                                 <div className="bubbles">
                                                                           <div></div>
                                                                           <div></div>
                                                                           <div></div>
                                                                           <div></div>
                                                                 </div>
                                                      </div>
                                           </div>
                                 </div>
                       </div>
             </div>
    </div>
  )
}

export default HeroSection