import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <header>
            <div className="inner-row">
                      <div className="header-content">
                                <NavLink to={''}>
                                           <div className="logo"></div>
                                </NavLink>
                      </div>
            </div>
    </header>
  )
}

export default Header