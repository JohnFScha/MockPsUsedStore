import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getGame } from '../../firebase/firebase'

const ItemDetailContainer = () => {
  const [juego, setJuego] = useState([])
  const { id } = useParams()
 
  useEffect(() => {
    getGame(id).then(juego => setJuego(juego))
  }, [])

  return (
    <main className='row'>
      <ItemDetail juego={juego} />
    </main>
  )
}

export default ItemDetailContainer