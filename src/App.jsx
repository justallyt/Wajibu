import "./css/fonts.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Lenis from "@studio-freight/lenis"
import { Routes, Route } from "react-router-dom"
import Services from "./pages/Services"
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
       </Routes>
  )
}

export default App
