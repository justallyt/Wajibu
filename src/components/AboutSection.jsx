import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"

const AboutSection = () => {
  return (
    <div className="about-section">
                   <div className="hero-images-part">
                                <img src={hero1} alt="" />
                                <img src={hero2} alt="" />
                   </div>

                   <div className="company-features">
                              <div className="inner-row">
                                           <div className="intro"> 
                                                     <h3>Core Features</h3>
                                                     <h1>Going above and beyond in making your brand shine and unique.</h1>
                                            </div>

                                            <div className="features-row"></div>
                              </div>
                   </div>
    </div>
  )
}

export default AboutSection