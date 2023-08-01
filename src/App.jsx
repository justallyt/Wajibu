import "./css/fonts.css"
import Home from "./pages/Home"
import Lenis from "@studio-freight/lenis"
function App() {
   const lenis = new Lenis()
   function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
  }
   requestAnimationFrame(raf)
  return (
       <>
             <Home />
       </>
  )
}

export default App
