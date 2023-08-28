import contact1 from "../assets/contactIMG.jpg"
import contact2 from "../assets/contactIMG2.jpg"
const ContactBody = () => {
  return (
    <div className="contact-body">
            <div className="inner-row">
                     <div className="contact-hero-section">
                                 <div className="contact-texts">
                                          <div className="contact-texts-inner">
                                                     <h1>We&apos;s Love to Hear from You</h1>
                                                     <p>Whether you&apos;re curious to learn more about who we are or what we do, or would like to discuss a potential project - we&apos;re always ready to answer any and all your questions. Typically, we do this within 24 hours.</p>
                                          </div>
                                 </div>
                                 <div className="contact-images">
                                            <img src={contact1} alt="" />
                                            <img src={contact2} alt="" />
                                 </div>
                     </div>

                     <div className="contact-form-section">
                               <div className="form-box">
                                           <h2>Promptly Get in Touch With Us</h2>
                                           <form action="">
                                                   <div className="form-row">
                                                            <label htmlFor="name">Your Name <span>*</span></label>
                                                            <input type="text" className="form-control" placeholder="John Doe"/>
                                                   </div>
                                                    <div className="form-row">
                                                              <label htmlFor="email">Email Address <span>*</span></label>
                                                              <input type="email" className="form-control" placeholder="johndoe@email.com" />
                                                    </div>
                                                    <div className="form-row">
                                                             <label htmlFor="phone">Phone Number <span>*</span></label>
                                                             <input type="number" className="form-control" placeholder="+254 712345678" pattern="[0-9]+" />
                                                    </div>
                                                    <div className="form-row">
                                                              <label htmlFor="interest">What can we help you with?</label>
                                                              <select name="" className="form-control">
                                                                      <option value="General Inquiry">General Inquiry</option>
                                                                       <option value="Web Development">Web Development</option>
                                                                       <option value="Web Redesign">Web Redesign</option>
                                                                       <option value="Ecommerce Solution">Ecommerce Solution</option>
                                                                       <option value="Search Engine Optimization">Search Engine Optimization</option>
                                                              </select>
                                                    </div>
                                                    <div className="form-row">
                                                                <label htmlFor="message">Please describe what you need <span>*</span></label>
                                                                <textarea cols="30" rows="10" placeholder="Message"></textarea>
                                                    </div>

                                                    <div className="form-btn">
                                                                <button type="submit">Submit</button>
                                                    </div>
                                           </form>
                               </div>
                     </div>
            </div>
    </div>
  )
}

export default ContactBody