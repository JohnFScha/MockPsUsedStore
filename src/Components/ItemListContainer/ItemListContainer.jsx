import React, { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([])

  useEffect(() => {
    fetch('./JSON/juegos.json')
    .then(response => response.json())
    .then(juegos => {
      const juegosFiltrados = juegos.filter(jueg => jueg.quantity > 0)
      setJuegos(juegosFiltrados)
    })
  })

  return (
    <div className="row">
      <ItemList juegos={juegos} />
    </div>
  )
}

export default ItemListContainer