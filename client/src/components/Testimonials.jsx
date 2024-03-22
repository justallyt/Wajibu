import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"
import { BiSolidQuoteAltLeft } from "react-icons/bi"
import { BiSolidQuoteAltRight } from 'react-icons/bi'

const testimonies = [
    { 
        id: 0,
        testimony: 'These guys helped me build a fantastic, fresh and unique website. The was never a no to a request and always replied next day to any emails. I would highly recommend them for their creativity but also their customer service.',
        person: 'Basil Kaudo',
        position: 'Co-founder, Osep Kenya'
    },
    {
        id: 1,
        testimony: 'The team have been brilliant. They worked with us very closely from the outset and have helped us turn some vague ideas into a fully functioning website. Great work guys.',
        person: 'Lawrin',
        position: 'Director, Lolo Cleaning Services'
    },
    {
         id: 2,
         testimony: "After having a nightmare experience with previous web developer, we nervously agreed to start again. The kind of professionalism and revamp Pazalab did on my website was unparalled. Awesome work guys - we can't thank you enough.",
         person: 'Robinson Manguro',
         position: 'Creative Director, Rennaissance Per Salut Architects '
    }
]
const Testimonials = () => {
  return (
    <div className="testimonials-section">
                 <div className="inner-row">
                                <div className="testimonials-section-content">
                                           <div className="intro">
                                                       <h3>Testimonials</h3>
                                                       <h1>Our Happy Clients</h1>
                                                       <p>Don&apos;t just trust our word. See what some of our recent clients say about working with us.</p>
                                           </div>
                                           <div className="hero-sparkle-two"></div>
                                           <div className="hero-sparkle-three"></div>
                                           <div className="hero-sparkle-six"></div>
                                           <div className="hero-sparkle-five"></div>
                                           <div className="hero-sparkle-four"></div>
                                           <div className="testimonials-section-row">
                                                      <Swiper
                                                              slidesPerView={1}
                                                              loop={true}
                                                              speed={1500}
                                                              autoplay={{
                                                                    delay: 10000,
                                                                    disableOnInteraction: false
                                                              }}
                                                              modules={[Autoplay]}
                                                       >
                                                               { testimonies.map(item => 
                                                                        <SwiperSlide key={item.id}>
                                                                                  <div className="testimonial-moja">
                                                                                            <p className="saying"><span><BiSolidQuoteAltLeft /></span> {item.testimony} <span><BiSolidQuoteAltRight /></span></p>                         
                                                                                            <div className="testimonial-text">
                                                                                                     <h4>{item.person}</h4>    
                                                                                                     <p>{item.position}</p>  
                                                                                             </div>                   
                                                                                   </div>
                                                                        </SwiperSlide>
                                                               )}
                                                      </Swiper>
                                           </div>
                                </div>
                 </div>
    </div>
  )
}

export default Testimonials