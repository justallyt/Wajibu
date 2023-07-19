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
                                                  <li><NavLink to={'/'}>About </NavLink></li>
                                                  <li><NavLink to={'/'}>Services</NavLink></li>
                                                  <li><NavLink to={'/'}>Portfolio</NavLink></li>
                                                  <li><NavLink to={'/'}>Contact Us</NavLink></li>
                                         </ul>
                                         <div className="phone-btn">
                                                    <span><BsPhoneVibrate /></span>
                                                    <p>+254 712345678</p>
                                         </div>
                                </nav>
                      </div>
            </div>
    </header>
  )
}

export default Header