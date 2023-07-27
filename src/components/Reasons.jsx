import reason from "../assets/reason1.jpg"
const Reasons = () => {
    const reasons = [
          {
               id: 0,
               title: 'Professional Developers',
               description: 'Our experienced development team use modern web technologies to create engaging user experiences that elevate user interaction.'
          },
          {
             id: 1,
             title: 'Client Retention',
             description: 'We handle each and every of our projects in such a way that our clients feel comfortable, autonomous and absolutely supported to choose to stay with us for longer than a single project.'
          },
          {
             id: 2,
             title: 'Polished Process',
             description: 'By combining your core objectives and a concrete plan, our seamlessly driven process ensures that your project not only looks good but also performs and converts.'
          },
          {
             id: 3,
             title: '3 Years of Experience',
             description: 'Over the years, we have worked with a variety of clients across most business sectors and non profit organizations, delivering tangible results and helping them differentiate their brand.'
          }
    ]
  return (
    <div className="reasons-section">
               <div className="inner-row">
                         <div className="reasons-section-content">
                                     <div className="intro-hook-column">
                                                <h3><span></span> Why Us</h3>
                                                <h1>We&apos;re the Best</h1>
                                                <p>Pazalab specializes solely in web technologies and constantly stay on the cutting edge, developing the best practices required to deliver exceptional services.</p>

                                                <div className="reason-image">
                                                          <img src={reason} alt="" />
                                                </div>
                                     </div>
                                     <div className="major-reasons-column">
                                               { reasons.map(item => 
                                                      <div className="reason-box" key={item.id}>
                                                                 <h2>{item.title}</h2>
                                                                 <p>{item.description}</p>
                                                      </div>
                                                )}
                                     </div>
                         </div>
               </div>
    </div>
  )
}

export default Reasons