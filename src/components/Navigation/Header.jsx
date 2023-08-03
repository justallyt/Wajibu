import { NavLink } from "react-router-dom"
import { BsPhoneVibrate } from "react-icons/bs"
import { CgMenuRight} from "react-icons/cg"
import { useContext } from "react"
import { mobileMenuContext } from "./menu_context"
const Header = () => {
  const [sidebarStatus, setSidebarStatus] = useContext(mobileMenuContext);

  const toggleSidebar = () => setSidebarStatus(!sidebarStatus)
  return (
    <header>
            <div className="inner-row">
                      <div className="header-content">
                                <NavLink to={''}>
                                           <div className="logo">
                                                    <h2>PazaLab</h2>
                                           </div>
                                </NavLink>
                                <nav>
                                         <ul>
                                                  <li><NavLink to={'/'}>Home</NavLink></li>
                                                  <li><NavLink to={'/about/'}>About </NavLink></li>
                                                  <li><NavLink to={'/services/'}>Services</NavLink></li>
                                                  <li><NavLink to={'/portfolio/'}>Portfolio</NavLink></li>
                                                  <li><NavLink to={'/contact/'}>Contact Us</NavLink></li>
                                         </ul>
                                         <div className="header-btns">
                                                     <div className="btn">
                                                                <span><BsPhoneVibrate /></span>
                                                                <p>+254 100938394</p>
                                                                <div className="bubbles">
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                </div>
                                                     </div>
                                                     <div className="mobile-trigger" onClick={toggleSidebar}>
                                                                 <span><CgMenuRight /></span>
                                                    </div>
                                         </div>
                                </nav>
                                
                      </div>
            </div>
    </header>
  )
}

export default Header