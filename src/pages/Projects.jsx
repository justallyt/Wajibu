import Footer from "../components/Footer"
import WholeNav from "../components/Navigation/WholeNav"
import Nudge from "../components/Nudge"
import ProjectListings from "../components/ProjectListings"
import '../css/projects.css'
const Projects = () => {
  return (
    <>
           <WholeNav />
           <div className="projects-hero-section">
                      <div className="inner-row">
                                  <div className="project-hero-content">
                                             <h1>We Build <span>Timeless</span> Experiences</h1>
                                             <div className="hero-desc">
                                                      <div className="inner-desc">
                                                                  <h3><span></span>Our Work</h3>
                                                                  <p>Consistent delivery of excellent products to our clients that we are both proud of is at the very essence of our culture.</p>
                                                      </div>
                                             </div>
                                  </div>
                      </div>
           </div>
           <ProjectListings />
           <Nudge />
           <Footer />
    </>
  )
}

export default Projects