import React from 'react'
import './CartWidget.scss'
import { FaShoppingCart, FaCartPlus } from 'react-icons/fa'
import { useCarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
 const { carrito, getItemQuantity } = useCarritoContext()
  
  return (
    // Usamos conditional rendering para evaluar si hay o no algun producto en el carrito. Si no lo hay, renderizamos un carrito vacio. Si lo hay renderizamos un carrito con elementos.
    <button className='btn btn-primary'>
      {
      carrito.length === 0 ?
      <Link className='nav-link' to={"/cart"}>
        <FaShoppingCart className='animate__animated animate__flash'/>
          {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span>}
      </Link>
      :
      <Link className='nav-link' to={"/cart"}>
        <FaCartPlus className='animate__animated animate__flash'/>
          {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span>}
      </Link>
      }
    </button>
  )
}

export default CartWidget