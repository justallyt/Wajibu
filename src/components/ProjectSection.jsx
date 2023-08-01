import onixlab from "../assets/onixlab.png"
import estate from "../assets/estate.png"
import zones from "../assets/zones.png"
import { AiOutlineLine } from "react-icons/ai"
import { HiArrowLongLeft } from "react-icons/hi2"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { useEffect, useRef } from "react"
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

  const leftBtnRef = useRef()
  const rightBtnRef = useRef()
  const sliderRef = useRef()

  useEffect(()=>{
        const leftBtn = leftBtnRef.current
        const rightBtn = rightBtnRef.current
        const loadedSlider = sliderRef.current;
        let counter = 0;
        const portfolios = loadedSlider.querySelectorAll('.project-moja')
        const size = portfolios[0].clientWidth + 100;

        if(counter == 0){
              leftBtn.classList.add("disabled")
        }

        leftBtn.addEventListener("click", () => {
               rightBtn.classList.remove('disabled');
               loadedSlider.style.transition = "all 0.8s ease";
               counter--
               
               if(window.innerWidth > 1200){
                        loadedSlider.style.transform = 'translateX('+(-size * counter)+'px)';                 
               }else{
                      if(window.innerWidth > 875){
                              loadedSlider.style.transform = 'translateX('+(-(size + 100) * counter)+'px)';
                      }else{
                                 loadedSlider.style.transform = 'translateX('+(-(size + 200) * counter)+'px)';
                      }
                         
               }
               if(counter == 0){
                    leftBtn.classList.add("disabled")
               }
        })

        rightBtn.addEventListener('click', () => {
                leftBtn.classList.remove('disabled')
                loadedSlider.style.transition = 'all 0.8s ease';
                counter++;

                if(window.innerWidth > 1200){
                         loadedSlider.style.transform = 'translateX('+(-size * counter)+'px)';
                }else{
                        if(window.innerWidth > 875){
                                loadedSlider.style.transform = 'translateX('+(-(size + 100) * counter)+'px)';
                        }else{
                                 loadedSlider.style.transform = 'translateX('+(-(size + 200) * counter)+'px)';
                        }
                }
                

                if(counter >= portfolios.length - 1){
                      rightBtn.classList.add('disabled')
                }
        })
  }, [])
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
                                     <div className="portfolio-slide-track" ref={sliderRef}>
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
                       <div className="project-slider-btns">
                                   <span ref={leftBtnRef}><HiArrowLongLeft /></span>
                                   <span ref={rightBtnRef}><HiArrowLongRight /></span>
                        </div>
                </div>
    </div>
  )
}

export default ProjectSection