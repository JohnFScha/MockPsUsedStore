import React from 'react'
import './CartWidget.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = ({count}) => {
  return (
    <button className='btn btn-primary'>
      <FontAwesomeIcon icon={faCartShopping} />
        {count}
    </button>
  )
}

export default CartWidget