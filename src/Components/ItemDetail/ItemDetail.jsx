import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'


const ItemDetail = ({ juego }) => {
  const onAdd = (contador) => {
    console.log(contador)
    console.log(juego)
  }

  return (
    <div className="row g-0">
      <div className="col-3">
          <img src={juego.img} alt={`Imagen de ${juego.title}`} className="img-fluid rounded-start" />
      </div>
      <div className="col-7">
          <div className="card-body">
              <h5 className="card-title">{juego.title}</h5>
              <p className="card-text">Genre: {juego.genre}</p>
              <p className="card-text">Metacritic score: {juego.score}</p>
              <p className="card-text">Price: ${juego.price}</p>
              <p className="card-text">Stock: {juego.quantity}</p>
              <ItemCount initial={1} min={1} max={juego.quantity} onAdd={onAdd} />
          </div>
      </div>
    </div>
  )
}

export default ItemDetail