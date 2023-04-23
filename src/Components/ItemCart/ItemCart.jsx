import React from 'react'
import { useCarritoContext } from '../../Context/CarritoContext'
import { BsTrash3Fill } from 'react-icons/bs'
import './ItemCart.scss'

const ItemCart = ({juego}) => {
  const {removeGame}  = useCarritoContext()

  return (
    <div className="row g-0 p-4 animate__animated animate__bounceIn" id='cartList'>
      <div className="col-4">
          <img src={juego.img} alt={`Imagen de ${juego.title}`} className="img-fluid rounded-start" />
      </div>
      <div className="col-6">
          <div className="card-body">
              <h5 className="card-title">{juego.title}</h5> 
              <p className="card-text">Unit Price: ${juego.price}</p>
              <p className="card-text">Quantity: x{juego.quantity}</p>
              <p className="card-text">Subtotal: ${juego.quantity * juego.price}</p>
              <button className="btn btn-primary" id='removeButton' onClick={() => removeGame(juego.id)}>Remove  <BsTrash3Fill/></button>
          </div>
      </div>
    </div>
  )
}

export default ItemCart