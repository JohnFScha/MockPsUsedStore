import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ({juego}) => {
  return (
    <article className='animate__animated animate__zoomIn card col-lg-3 col-sm-1'>
      <div className="card-body">
        <img className='card-img-top' src={juego.img} alt={juego.title}/>
        <h1 className="card-title">{juego.title}</h1>
        <h2 className='card-title'>Genre: {juego.genre}</h2>
        <h2 className='card-title'>${juego.price}</h2>
        <p className="card-text">Metracritic score: {juego.score}</p>
        <button className="btn btn-primary d-block w-100"><Link className='nav-link' to={`/juego/${juego.id}`}>Details</Link></button>
      </div>
    </article>
  )
}

export default Item