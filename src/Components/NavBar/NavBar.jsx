import React from 'react'
import './Navbar.scss'
import Logo from '../../Utils/LOGO.png'
import { faFloppyDisk, faHome, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className='d-flex justify-content-evenly'>
      <div className="d-flex flex-column flex-shrink-0 justify-content-evenly">
        <a href="/" className="d-block p-1 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <img className='rounded rounded-circle' src={Logo} alt="logo" />
        </a>
        <CartWidget />
        <ul className="nav nav-pills nav-flush d-flex flex-column justify-content-evenly">
          <li className="nav-item">
            <a href="#" className="nav-link py-3 rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
              <FontAwesomeIcon icon={faShop} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
              <FontAwesomeIcon icon={faFloppyDisk} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar