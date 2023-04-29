import React, { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getGames } from '../../firebase/firebase'

const ItemListContainer = ({greeting}) => {
  const [juegos, setJuegos] = useState([])
  const { category } = useParams()

  useEffect(() => {

    if(category) {
      getGames()
      .then(juegos => {
        const juegosFiltrados = juegos.filter(jueg => jueg.stock > 0).filter(jueg => jueg.console === category)
        setJuegos(juegosFiltrados)
      })
    } else {
      getGames()
      .then(juegos => {
        const juegosFiltrados = juegos.filter(jueg => jueg.stock > 0)
        setJuegos(juegosFiltrados)
      })
    }
  }, [category])

  return (
    <>
      <h1 className="display-4 animate__animated animate__flipInX">{greeting} {category}</h1>
      <main className="row">
        <ItemList juegos={juegos} plantilla={"Item"} />
      </main>
    </>
  )
}

export default ItemListContainer