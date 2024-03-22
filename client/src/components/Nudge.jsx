import { NavLink } from "react-router-dom"
const Nudge = () => {
  return (
    <div className="nudge-section">
             <div className="inner-row">
                        <div className="nudge-section-content">
                                     <h1>Have A Project in Mind? Let us know and together we can <span>bring it to Life</span>.</h1>
                                     <p>Should you need any clarifications or would just like to know a little more about use, that&apos;s cool too. Click the button below to get started.</p>

                                     <div className="nudge-btn">
                                                    <div className="btn">
                                                                 <NavLink to={'/contact-us/'}>Let&apos;s Talk</NavLink>
                                                                 <div className="bubbles">
                                                                           <div></div>
                                                                           <div></div>
                                                                           <div></div>
                                                                           <div></div>
                                                                 </div>
                                                      </div>
                                     </div>
                        </div>
             </div>
    </div>
  )
}

export default Nudge