
import { process } from "../data/process"
import ProcessAccordion from "./ProcessAccordion"
const Process = () => {

  return (
    <div className="process-section">
              <div className="inner-row">
                        <div className="process-content">
                                    <div className="intro">
                                              <div className="left-intro">
                                                        <h3>Our Process</h3>
                                                        <h1>How We Work </h1>          
                                              </div>
                                              <div className="right-intro">
                                                        <p>Our remarkable team works based on a sucess-driven framework, that is designed for your success and is built on sucessful collaboration, transparency and efficiency.</p>
                                              </div>
                                    </div>
                                    <div className="process-content-container">
                                             <div className="process-content-row">
                                                        { process.map(item => 
                                                              <ProcessAccordion key={item.id} data={item} />
                                                          )}
                                             </div>
                                    </div>
                        </div>
              </div>
    </div>
  )
}

export default Process