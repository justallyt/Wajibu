import { useState } from "react"
import { mobileMenuContext } from "./menu_context"
import Header from "./Header"
import Sidebar from "./Sidebar"
const WholeNav = () => {
    const [status, setStatus] = useState(false)
  return (
    <mobileMenuContext.Provider value={[status, setStatus]} >
              <Header />
              {/* <Sidebar /> */}
    </mobileMenuContext.Provider>
  )
}

export default WholeNav