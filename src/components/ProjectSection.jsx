import onixlab from "../assets/onixlab.png"
import estate from "../assets/estate.png"
import zones from "../assets/zones.png"
import { AiOutlineLine } from "react-icons/ai"
import { NavLink } from "react-router-dom"
const ProjectSection = () => {
  const projects = [
    {
         id: 0,
         image: onixlab,
         category: 'Web Development',
         date: 'January 23rd, 2023',
         title: 'OnixLab',
         link: ''
    },
       {
         id: 1,
         image: estate,
         category: 'Web Development',
         date: 'May 23rd, 2023',
         title: 'Estate',
         link: ''
    },
     {
         id: 2,
         image: zones,
         category: 'Web Development',
         date: 'June 23rd, 2023',
         title: 'Zones',
         link: ''
    },
    {
      id: 3,
      image: onixlab,
      category: 'Web Development',
      date: 'January 23rd, 2023',
      title: 'OnixLab',
      link: ''
 },
  ]
  return (
    <div  className="project-section">
                <div className="inner-row">
                           <div className="project-section-content">
                                       <div className="project-intro">
                                                   <div className="tab-intro">
                                                                <span></span>
                                                                <h2>Recent Work</h2>
                                                   </div>
                                                   <h1>Some of our favorite projects.</h1>
                                       </div>
                           </div>

                           <div className="portfolio-projects-wrapper">
                                       { projects.map(item => 
                                         <div className="project-moja" key={item.id}>
                                                    <div className="project-image">
                                                                  <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="type-date">
                                                             <p>{item.category} <span><AiOutlineLine /></span> {item.date}</p>
                                                            <div className="project-title">
                                                                        <h2>{item.title}</h2>
                                                                        <NavLink to={'/'}>View Project</NavLink>
                                                            </div>
                                                    </div>
                                          </div>
                                        )}
                       </div>
                </div>
    </div>
  )
}

export default ProjectSection