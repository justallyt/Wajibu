import { NavLink } from "react-router-dom"
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from '../assets/blog3.jpg'
const articles = [
    {
        id: 0,
        image: blog1,
        title: 'Web Design Optimization',
        date: '21st September, 2023'
    },
    {
        id: 1,
        image: blog2,
        title: 'Developer Team Essence',
        date: '3rd October, 2023'
    },
    {
        id: 2, 
        image: blog3,
        title: 'Brand Strategy within the Web Space',
        date: '5th November, 2023'
    }
]
const BlogSection = () => {
  return (
    <div className="blog-section">
                <div className="inner-row">
                          <div className="blog-section-content">
                                    <div className="blog-intro">
                                                <h3><span></span> Blog</h3>
                                                <h1>Web Development Insights</h1>
                                    </div>

                                    <div className="blog-section-row">
                                               { articles.map(item => 
                                                <div className="blog-moja" key={item.id}>
                                                              <div className="blog-image">
                                                                     <img src={item.image} alt="" />
                                                                      <span>{item.date}</span>
                                                              </div>
                                                             <h2>{item.title}</h2>
                                                             <NavLink to={'/'}>Read Article</NavLink>
                                               </div>
                                                )}
                                    </div>
                          </div>
                </div>
    </div>
  )
}

export default BlogSection