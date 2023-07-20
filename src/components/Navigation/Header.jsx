import { NavLink } from "react-router-dom"
import { BsPhoneVibrate } from "react-icons/bs"

const Header = () => {
  return (
    <header>
            <div className="inner-row">
                      <div className="header-content">
                                <NavLink to={''}>
                                           <div className="logo">
                                                    <h2>Wajibu</h2>
                                           </div>
                                </NavLink>
                                <nav>
                                         <ul>
                                                  <li><NavLink to={'/'}>Home</NavLink></li>
                                                  <li><NavLink to={'/about'}>About </NavLink></li>
                                                  <li><NavLink to={'/services'}>Services</NavLink></li>
                                                  <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                                                  <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                                         </ul>
                                         <div className="btn">
                                                    <span><BsPhoneVibrate /></span>
                                                    <p>+254 712345678</p>
                                                    <div className="bubbles">
                                                                  <div></div>
                                                                  <div></div>
                                                                  <div></div>
                                                                  <div></div>
                                                    </div>
                                         </div>
                                </nav>
                      </div>
            </div>
    </header>
  )
}

export default Header