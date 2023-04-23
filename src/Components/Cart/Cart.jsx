import React from 'react'
import './Cart.scss'
import { useCarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const Cart = () => {
  const { carrito, emptyCart, totalPrice} = useCarritoContext()

  return (
    <>
      {
      carrito.length === 0 ?
        <div className='container cartEmpty'>
          <h1 className='display-4' id='cartTitle'>Cart empty</h1>
          <button className="btn btn-primary" id='backButton'><Link className='nav-link' to={"/"}>Back</Link></button>
        </div> 
      :
      <main className='row'>
        <div className='col-12 cartFull'>
          <h1 className='display-4' id='cartTitle'>Your Cart:</h1>
          <ItemList juegos={carrito} plantilla={"ItemCart"}/>
        </div>
        <div className="col-12 buttonCont">
          <p>Total price: ${totalPrice()}</p>
          <button className="btn btn-outline-success" id='end'>End Purchase</button>
        </div>
      </main>
      }
    </>
  )
}

export default Cart