import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <NavLink to="./"><img src="./image/LogoEC2.png" alt="" className='logo' /></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="./">Home</NavLink>
            </li>
            <li>
<Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='drop-down-menu'>
        Courses
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item > <NavLink to="./frontend">FrontEnd</NavLink></Dropdown.Item>              <Dropdown.Divider />
        <Dropdown.Item ><NavLink to="./backend">BackEnd</NavLink></Dropdown.Item>              <Dropdown.Divider />
        <Dropdown.Item ><NavLink to="./fullstack">Fullstack</NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </li>
            <li>
              <NavLink to="./contactus">Contact</NavLink>
            </li>
            <li>
              <NavLink to="./aboutus">About</NavLink>
            </li>
            <li>
              <NavLink to="./login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
