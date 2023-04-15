import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [juego, setJuego] = useState([])

  useEffect(() => {
    fetch('./JSON/juegos.json')
    .then(response => response.json())
    .then(juegos => {
        const jueg = juegos.find(jueg => jueg.id === 1)
        setJuego(jueg)
    })
  }, [])

  return (
    <>
      <ItemDetail juego={juego} />
    </>
  )
}

export default ItemDetailContainer