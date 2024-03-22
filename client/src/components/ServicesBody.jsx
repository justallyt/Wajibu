import webdev1 from "../assets/webdev.jpg"
import econ1 from '../assets/ecommerce.jpg'
import econ2 from '../assets/ecommerce2.jpg'
import seo from "../assets/seo.jpg"
const ServicesBody = () => {
  return (
    <div className="services-body-section">
                <div className="inner-row">
                           <div className="services-body-content">
                                        <div className="body-intro">
                                                   <h2>We offer a Diversity of Skills</h2>
                                                   <p>Our technology-first approach and focus on innovation, powered by our highly skilled workforce, enables us to provide our customers with highly customized digital solutions that facilitates them in gaining a competitive advantage in today&apos;s fast-changing and competitive marketplace.</p>
                                        </div>

                                        <div className="body-content-row">
                                                  <div className="service-type-moja">
                                                             <div className="service-type-image">
                                                                        <img src={webdev1} alt="" />
                                                             </div>
                                                             <div className="service-type-description">
                                                                      <h2>Web Development</h2>
                                                                      <p>We specialize in creating custom web solutions tailored to your unique goals and needs. Our team of experienced developers employ industry best practices to build responsive, user-friendly websites and web apps that are effective and efficient while delivering value to your organization.</p>
                                                                      <p>The tools we use to build first class user experiences that stand out are categorized into either one or both of the following specialities:</p>
                                                                      <div className="tools-wrapper">
                                                                                <p>1. <span>Frontend Development</span></p>
                                                                                <p>Great user interfaces are imperative, therefore incorporating varied layouts, parallax effects and cool modern animations ensures we integrate just the right amount of interaction that keep end users interested.</p>
                                                                                <p>Under this docket, we use HTML, CSS, TailwindCSS, JavaScript, React, NextJS, GSAP, Framer Motion etc</p>

                                                                                <p>2. <span>Backend Development</span></p>
                                                                                <p>From powerful and bespoke enterprise business applications to small time features required to effectively run organizations, we get our hands dirty building and integrating APIs, creating and managing databases from the ground up to your precise requirements. </p>
                                                                                <p>Under this docket, we use PHP, NodeJs(Express), MySQL/MariaDB, MongoDB etc</p>
                                                                      </div>
                                                             </div>
                                                  </div>

                                                  <div className="service-type-ecommerce">
                                                               <div className="service-type-description">
                                                                           <div className="description-inner">
                                                                                      <h2>Ecommerce Solutions</h2>
                                                                                      <p>Many elements combine in order to create a successful ecommerce platforms for your clients. Brand positioning, UI,UX are essential design elements for a seamless, intuitive shopping cart and checkout process that is required to ensure you maximize your potential on online sales.</p>
                                                                                       <p>We particularly use wordpress CMS  to craft up an ecommerce platform that sells. We also purpose to integrate payment solutions to ensure seamless secure online purchasing by your customers. </p>
                                                                           </div>
                                                                </div>
                                                               <div className="ecommerce-images">
                                                                         <img src={econ2} alt="" />
                                                                          <img src={econ1} alt="" />
                                                               </div>
                                                  </div>

                                                  <div className="service-type-optimization">
                                                              <div className="optimization-image">
                                                                          <img src={seo} alt="" />
                                                              </div>
                                                              <div className="service-type-description">
                                                                         <h2>Search Engine Optimization</h2>
                                                                         <p>Increasing visibility to your site is important, however our primary aim is to drive traffic that converts. SEO closely ties in with link building strategies and adding triggers across social media platforms combining these strategies to help deliver massively improved results for our clients.</p>
                                                                         <p>Via google analytics, we review the click rates for your website to give you the most infomation to help you make informed choices that influence the direction your marketing efforts.</p>
                                                              </div>
                                                  </div>
                                        </div>
                           </div>
                </div>
    </div>
  )
}

export default ServicesBody