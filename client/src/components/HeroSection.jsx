import { NavLink } from "react-router-dom"
import { PiDotOutlineFill } from 'react-icons/pi'
import { IoTriangleOutline } from "react-icons/io5"
import { MdOutlineRectangle } from "react-icons/md"
import { CgShapeRhombus, CgShapeCircle, CgShapeHalfCircle, CgShapeZigzag } from "react-icons/cg"
import { FaStarOfLife } from "react-icons/fa"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
const HeroSection = () => {
  const heroIntro = useRef()
  const heroText = useRef()
  const heroDesc = useRef()
  const heroBtn = useRef()
  useEffect(()=>{
           const tl = gsap.timeline()

           tl.to(heroIntro.current, {
                 clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                 opacity: 1,
                 y: 0,
                 duration: 1
           })

           tl.to(heroText.current, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 1
           })
           tl.to(heroDesc.current, {
                 y: 0,
                opacity: 1,
                duration: 1,
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
           })
           tl.to(heroBtn.current, {
                   y: 0,
                   opacity: 1,
                   duration: 1,
           })
  }, [])
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
                                  <div className="hero-sparkle"></div>
                                  <div className="hero-sparkle-two"></div>
                                  <div className="hero-sparkle-three"></div>
                                  <div className="hero-sparkle-four"></div>
                                  <div className="hero-sparkle-five"></div>
                                  <div className="hero-sparkle-six"></div>
                                 <div className="hero-texts">
                                           <h3 ref={heroIntro}><span></span> Dedicated to digital excellence</h3>
                                           <h1 ref={heroText}>Creating next generation <span>web solutions</span></h1>
                                           <p ref={heroDesc}>PazaLab is a creative web agency that helps you design, build and deploy fascinating user experiences that amplifies your online presence. Our team is committed to delivering high-end web solutions to all clients in Kenya, Africa and across the world. </p>

                                           <div className="hero-btns" ref={heroBtn}>
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