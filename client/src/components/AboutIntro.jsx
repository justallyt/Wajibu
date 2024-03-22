import about1 from "../assets/hero2.jpg"
import about2 from "../assets/about2.jpg"
const AboutIntro = () => {
  return (
    <div className="about-intro-section">
                 <div className="inner-row">
                         <div className="hero-sparkle"></div>
                          <div className="hero-sparkle-two"></div>
                          <div className="hero-sparkle-three"></div>
                          <div className="hero-sparkle-four"></div>
                          <div className="hero-sparkle-five"></div>
                            <div className="intro-section-content">
                                        <div className="intro-texts">
                                                     <div className="intro-column">
                                                                  <h3>We are PazaLab</h3>
                                                                  <h2>Creating Amazing Web Experiences for Businesses & Organizations.</h2>
                                                     </div>
                                                     <div className="intro-description">
                                                                <p>We serve startups, small to large enterprises, alongside non-governmental organizations by building new products or improve existing ones to empower them to not only grow, but also achieve excellence in their operations.</p>
                                                     </div>
                                        </div>

                                        <div className="intro-images">
                                                    <img src={about1} alt="" />
                                                    <img src={about2} alt="" />
                                        </div>

                                        <div className="statements">
                                                   <div className="statement-moja">
                                                               <h2>Our Mission</h2>
                                                               <p>To empower African Businesses and Organizations to grow and achieve their goals through innovative web solutions.</p>
                                                   </div>
                                                   <div className="statement-moja">
                                                              <h2>Our Vision</h2>
                                                              <p>A technologically connected Africa. We at Pazalab are building innovative tech solutions that enrich African lives.</p>
                                                   </div>
                                        </div>
                            </div>
                 </div>
    </div>
  )
}

export default AboutIntro