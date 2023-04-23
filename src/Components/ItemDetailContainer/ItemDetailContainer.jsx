import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [juego, setJuego] = useState([])
  const {game} = useParams()
 
  useEffect(() => {
    fetch('../JSON/juegos.json')
    .then(response => response.json())
    .then(juegos => {
        const jueg = juegos.find(jueg => jueg.id === parseInt(game))
        setJuego(jueg)
    })
  }, [game])

  return (
    <main className='row'>
      <ItemDetail juego={juego} />
    </main>
  )
}

export default ItemDetailContainer