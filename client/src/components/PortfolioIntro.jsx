import { useEffect, useRef } from "react"

const PortfolioIntro = () => {
    const scrollerRef = useRef();

    useEffect(() => {
              const scrollerInner = scrollerRef.current.querySelector('.portfolio-scroller-inner')
              const scrollerContent = Array.from(scrollerInner.children);

              scrollerContent.forEach(item => {
                      const duplicatedItem = item.cloneNode(true);
                      duplicatedItem.setAttribute("aria-hidden", true);
                      scrollerInner.appendChild(duplicatedItem);
              })
    }, [])
  return (
    <div className="portfolio-intro-section">
                 <div className="portfolio-scroller" ref={scrollerRef}>
                              <div className="portfolio-scroller-inner">
                                         <div className="box"></div>
                                         <div className="box"></div>
                                         <div className="box"></div>
                              </div>
                 </div>
    </div>
  )
}

export default PortfolioIntro