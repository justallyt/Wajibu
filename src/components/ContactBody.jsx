import contact1 from "../assets/contactIMG.jpg"
import contact2 from "../assets/contactIMG2.jpg"
const ContactBody = () => {
  return (
    <div className="contact-body">
            <div className="inner-row">
                     <div className="contact-hero-section">
                                 <div className="contact-texts">
                                            <h1>We&apos;s Love to Hear from You</h1>
                                            <p>Whether you&apos;re curious to learn more about who we are or what we do, or would like to discuss a potential project - we&apos;re always ready to answer any and all your questions. Typically, we do this within 24 hours.</p>
                                 </div>
                                 <div className="contact-images">
                                            <img src={contact1} alt="" />
                                            <img src={contact2} alt="" />
                                 </div>
                     </div>
            </div>
    </div>
  )
}

export default ContactBody