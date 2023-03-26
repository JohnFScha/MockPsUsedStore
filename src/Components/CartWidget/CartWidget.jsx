import React from 'react'
import './CartWidget.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <FontAwesomeIcon icon={faCartShopping} />
      0
    </div>
  )
}

export default CartWidget