import React from 'react'
import './Item.scss'

const Item = ({juego}) => {
  return (
    <article className='card col-lg-3 col-sm-1'>
      <div className="card-body">
        <img className='card-img-top' src={juego.img} alt={juego.title}/>
        <h1 className="card-title">{juego.title}</h1>
        <h2 className='card-title'>Genre: {juego.genre}</h2>
        <h2 className='card-title'>${juego.price}</h2>
        <p className="card-text">Metracritic score: {juego.score}</p>
        <button className="btn btn-primary">Details</button>
      </div>
    </article>
  )
}

export default Item