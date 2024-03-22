import { useState } from "react"
import contact1 from "../assets/contactIMG.jpg"
import contact2 from "../assets/contactIMG2.jpg"
import { useSendClientMessageMutation } from "../redux/clientSlice"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
const ContactBody = () => {
  const [status, setStatus] = useState("Submit")
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [sendMessage, { isLoading }] = useSendClientMessageMutation();

  const sendToPazalab = async (data) => {
         setStatus("Submitting...")
        try {
                const res = await sendMessage(data).unwrap();
                if(res){
                         setStatus("Message Submitted")
                         toast.success(res.message, { position: 'bottom-right'})
                }else{
                         setStatus("Not Submitted")
                }
        } catch (error) {
               toast.error("Form submission error.", {
                      duration: 6000,
                      position: "bottom-right"
               })
               setStatus("Not Submitted")
        } 
       setTimeout(() => {
               setStatus("Submit")
       }, 6000)
        reset();
  }
  return (
    <div className="contact-body">
            <Toaster />
            { isLoading ? 
                   <div className="loading-spinner">
                               <span className="loader"></span>
                   </div>
                     :
                ''
            }
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
                                           <form onSubmit={handleSubmit(sendToPazalab)}>
                                                   <div className="form-row">
                                                            <label htmlFor="name">Your Name <span>*</span></label>
                                                            <input type="text" className={ errors.name ? "form-control error"  : "form-control"} placeholder="John Doe" {...register('name', { required: 'Client name is required'})} />
                                                            <span className="error">{errors.name && errors.name.message}</span>
                                                   </div>
                                                    <div className="form-row">
                                                              <label htmlFor="email">Email Address <span>*</span></label>
                                                              <input type="email" className={ errors.email ? "form-control error" : "form-control"} placeholder="johndoe@email.com" {...register('email', { required: 'Client email is required'})} />
                                                              <span className="error">{errors.email && errors.email.message}</span>
                                                    </div>
                                                    <div className="form-row">
                                                             <label htmlFor="phone">Phone Number <span>*</span></label>
                                                             <input type="number" className={errors.phone ? "form-control error": "form-control"} placeholder="+254 712345678" pattern="[0-9]+" { ...register('phone', { required: 'Client phone number is required'})} />
                                                             <span className="error">{errors.phone && errors.phone.message}</span>
                                                    </div>
                                                    <div className="form-row">
                                                              <label htmlFor="interest">What can we help you with?</label>
                                                              <select {...register('interest')} className="form-control">
                                                                      <option value="General Inquiry">General Inquiry</option>
                                                                       <option value="Web Development">Web Development</option>
                                                                       <option value="Web Redesign">Web Redesign</option>
                                                                       <option value="Ecommerce Solution">Ecommerce Solution</option>
                                                                       <option value="Search Engine Optimization">Search Engine Optimization</option>
                                                              </select>
                                                    </div>
                                                    <div className="form-row">
                                                                <label htmlFor="message">Please describe what you need <span>*</span></label>
                                                                <textarea className={errors.msg ? 'error': ''} cols="30" rows="10" placeholder="Message" {...register('msg', { required: 'Client message is required'})}></textarea>
                                                                <span className="error">{errors.msg && errors.msg.message}</span>
                                                    </div>

                                                    <div className="form-btn">
                                                                <button type="submit">{status}</button>
                                                    </div>
                                           </form>
                               </div>
                     </div>
            </div>
    </div>
  )
}

export default ContactBody