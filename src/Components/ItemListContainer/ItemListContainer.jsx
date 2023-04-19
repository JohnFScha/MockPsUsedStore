import React, { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([])
  const { category } = useParams()

  useEffect(() => {

    if(category) {
      fetch('../JSON/juegos.json')
      .then(response => response.json())
      .then(juegos => {
        const juegosFiltrados = juegos.filter(jueg => jueg.quantity > 0).filter(jueg => jueg.console === category)
        setJuegos(juegosFiltrados)
      })
    } else {
      fetch('./JSON/juegos.json')
      .then(response => response.json())
      .then(juegos => {
        const juegosFiltrados = juegos.filter(jueg => jueg.quantity > 0)
        setJuegos(juegosFiltrados)
      })
    }
  }, [category])

  return (
    <main className="row">
      <ItemList juegos={juegos} />
    </main>
  )
}

export default ItemListContainer