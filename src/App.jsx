import "./css/fonts.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Lenis from "@studio-freight/lenis"
import { Routes, Route } from "react-router-dom"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
function App() {
   const lenis = new Lenis()
   function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
  }
   requestAnimationFrame(raf)
  return (
       <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path='/about/' element={<About />} />
                 <Route path="/services/" element={<Services />} />
                 <Route path="/projects/" element={<Projects />} />
                 <Route path="/contact-us/" element={<Contact />} />
       </Routes>
  )
}

export default App
