import React from 'react'
import './Navbar.scss'
import Logo from '../../Utils/LOGO.png'
import { faFloppyDisk, faHome, faShop, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <img src={Logo} alt="p-store" className='logo'/>
      <CartWidget />
      <nav className='nav-links'>
        <a href="/" className='home'>
          <FontAwesomeIcon icon={faHome}/>
        </a>
        <a href="/" className='shop'>
          <FontAwesomeIcon icon={faShop}/>
        </a>
        <a href="/" className='saved'>
          <FontAwesomeIcon icon={faFloppyDisk}/>
        </a>
      </nav>
    </div>
  )
}

export default NavBar