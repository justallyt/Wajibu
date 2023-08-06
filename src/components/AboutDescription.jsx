import valuesImg from "../assets/valuesImg.jpg"
const AboutDescription = () => {
  return (
    <div className="description-section">
               <div className="inner-row">
                          <div className="description-section-content">
                                      <h1>Who We Are</h1>

                                      <div className="description-texts">
                                                 <p>Pazalab is a technology firm in Nairobi, Kenya focused on creating innovative web solutions for businesses and organizations of all sizes. We work as a cohesive unit to ensure we go above and beyond in development with a target to achieve the highest standards of quality in everything we produce for our clients.</p>
                                                 <p>We are highly passionate about our work, design and technology in general therefore we set high expectations for how we deliver results to our clients hence why we are among the best web development agencies in Kenya. We seek to be a reliable software partner with all our clients so that we help them get ahead of challenges and discover growth opportunities with our services.</p>
                                               
                                      </div>
                          </div>

                          <div className="values-section">
                                    <div className="values-intro">
                                               <h3>Our Values</h3>
                                                <h1>We are demystifying technology that help drive businesses and organizations. Together, we can create clear and clean solutions for contemporary challenges - and prepare for future challenges as well.</h1>
                                    </div>


                                    <div className="values-section-row">
                                                <div className="values-container">
                                                            <div className="value-moja">
                                                                    
                                                            </div>
                                                </div>
                                                <div className="values-image">
                                                          <img src={valuesImg} alt="" />
                                                </div>
                                    </div>
                          </div>
               </div>
    </div>
  )
}

export default AboutDescription