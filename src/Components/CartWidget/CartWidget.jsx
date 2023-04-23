import React from 'react'
import './CartWidget.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
 const { getItemQuantity } = useCarritoContext()
  
  return (
    <button className='btn btn-primary'>
      <Link className='nav-link' to={"/cart"}>
      <FontAwesomeIcon icon={faCartShopping} />
        {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span>}
      </Link>
    </button>
  )
}

export default CartWidget