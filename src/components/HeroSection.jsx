import { NavLink } from "react-router-dom"


const HeroSection = () => {
  return (
    <div className="hero-section">
             <div className="inner-row">
                       <div className="hero-section-content">
                                 <div className="hero-texts">
                                           <h3><span></span> Dedicated to digital excellence</h3>
                                           <h1>Creating next generation <span>web solutions</span></h1>
                                           <p>Wajibu is a creative web agency that helps you design, build and deploy fascinating user experiences that amplifies your online presence. Our team is committed to delivering high-end web solutions to all clients in Kenya, Africa and across the world. </p>

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