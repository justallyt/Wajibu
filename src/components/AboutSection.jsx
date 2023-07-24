import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import responsive from "../assets/icons/device.png"
import  customization from "../assets/icons/feature.png"
import animation from "../assets/icons/aim.png"
import seo from "../assets/icons/seo.png"
import support from "../assets/icons/search-location.png"
import layouts from "../assets/icons/web-design.png"
import about1 from "../assets/about1.jpg"
import about2 from '../assets/about2.jpg'
import { NavLink } from "react-router-dom"
const features = [
     {
          id: 0,
          icon: responsive,
          title: 'Responsive Design'
     },
     {
        id: 1,
        icon: customization,
        title: 'Powerful Customization'
     },
     {
        id: 2,
        icon: animation,
        title: 'Cool & Modern Animations'
     },
     {
        id: 3,
        icon: seo,
        title: 'SEO Friendly Coding'
     },
     {
        id: 4,
        icon: support,
        title: 'Reliable Technical Support'
     },
     {
        id: 5,
        icon: layouts,
        title: 'Varied Layouts & Parallax'
     }
]
const AboutSection = () => {
  return (
    <div className="about-section">
                   <div className="hero-images-part">
                                <img src={hero1} alt="" />
                                <img src={hero2} alt="" />
                   </div>

                   <div className="company-features">
                              <div className="inner-row">
                                           <div className="small-spark"></div>
                                           <div className="intro"> 
                                                     <h3>Core Features</h3>
                                                     <h1>Going above and beyond in making your brand shine and unique.</h1>
                                            </div>
                                            <div className="green-spark"></div>
                                            <div className="features-row">
                                                          { features.map(item => 
                                                            <div className="feature-moja" key={item.id}>
                                                                     <div className="icon">
                                                                              <img src={item.icon} alt="" />
                                                                     </div>
                                                                     <h3>{item.title}</h3>
                                                          </div>
                                                            )}
                                            </div>
                              </div>
                   </div>

                   <div className="about-content">
                              <div className="inner-row">
                                        <div className="about-sparkle"></div>
                                         <div className="about-content-grid">
                                                    <div className="about-content-column">
                                                              <div className="about-content-column-inner">
                                                                         <h3><span></span> About Us</h3>

                                                                          <p>We are a kenyan based web development company delivering stunning, creative websites, business platforms and applications that resonate with users.</p>
                                                                          <p>As a reliable partner, we help our clients build their innovations, strengthen their teams, automate processes and enhance their existing systems for maximum business value and efficient growth.</p>

                                                                          <div className="about-btn">
                                                                                   <div className="btn">
                                                                                               <NavLink to={'/'}>Know More</NavLink>
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
                                                     <div className="about-content-images">
                                                               <img src={about1} alt="" className="vertical" />
                                                               <img src={about2} alt="" className="horizontal" />
                                                     </div>
                                         </div>
                              </div>
                   </div>
    </div>
  )
}

export default AboutSection