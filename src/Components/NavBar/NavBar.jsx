import React from 'react'
import './Navbar.scss'
import Logo from '../../Utils/LOGO.png'
import CartWidget from '../CartWidget/CartWidget'
import Categories from './Categories/Categories'

const NavBar = () => {
  return (
    <nav className='d-flex justify-content-evenly'>
      <div className="d-flex flex-column flex-shrink-0 justify-content-evenly">
        <a href="/" className="d-block p-1 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <img className='rounded rounded-circle' src={Logo} alt="logo" />
        </a>
        <CartWidget />
        <Categories />
      </div>
    </nav>
  )
}

export default NavBar