/* eslint-disable react/prop-types */
import { useState } from "react"
const ProcessAccordion = ({ data }) => {
    const [active, setActive] = useState(false);
    const openProcess = () => {
          setActive(!active)
    }
  return (
    <div className={active ? "process-moja active" : "process-moja"}>
               <div className="header" onClick={openProcess}>
                         <h2>{data.title}</h2>
                         <h1>{data.count}</h1>
               </div>
               <div className={ active ? "description active" : "description"}>
                         <div className="description-inner">
                                  <p>{data.description}</p>
                         </div>
               </div>
       </div>
  )
}

export default ProcessAccordion