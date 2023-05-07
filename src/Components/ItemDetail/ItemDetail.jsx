import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useCarritoContext } from '../../Context/CarritoContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const ItemDetail = ({ juego }) => {
  const { addGame } = useCarritoContext()
  let navigate = useNavigate()

  const onAdd = (contador) => {
    addGame(juego, contador)
    toast.info(`${juego.title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate(`/category/${juego.console}`)
  }

  return (
    <div className="row g-0 p-5 animate__animated animate__bounceIn">
      <div className="col-4">
          <img src={juego.img} alt={`Imagen de ${juego.title}`} className="img-fluid rounded-start" />
      </div>
      <div className="col-6">
          <div className="card-body">
              <h5 className="card-title">{juego.title}</h5>
              <p className="card-text">Genre: {juego.genre}</p>
              <p className="card-text">Metacritic score: {juego.score}</p>
              <p className="card-text">Price: ${juego.price}</p>
              <p className="card-text">Stock: {juego.stock}</p>
              <ItemCount initial={1} min={1} max={juego.stock} onAdd={onAdd} />
          </div>
      </div>
    </div>
  )
}

export default ItemDetail