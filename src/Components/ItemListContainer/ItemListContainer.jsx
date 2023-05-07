import React, { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getGames } from '../../firebase/firebase'
import { RotatingLines } from 'react-loader-spinner'

const ItemListContainer = ({greeting}) => {
  const [juegos, setJuegos] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {

    // Chequeamos que el usuario haya o no elegido una categoria de elementos en el nav. 
    if(category) {
      // Si lo hace, tomamos esa categoria de los params y filtramos los juegos de acuerdo a su consola de origen.
      getGames()
      .then(juegos => {
        const juegosFiltrados = juegos.filter(jueg => jueg.stock > 0).filter(jueg => jueg.console === category)

        // Seteamos un time out, para renderizar de manera condicional el loader 
        setTimeout(() => {
          setLoading(false)
          setJuegos(juegosFiltrados)
        }, 500)
      })
    } else {

      //Si no eligio ninguna categoria, se renderiza el listado completo nuevamente.
      getGames()
      .then(juegos => {
        const juegosFiltrados = juegos.filter(jueg => jueg.stock > 0)

        // Nuevamente seteamos un time out para renderizar el loader de manera condicional.
        setTimeout(() => {
          setLoading(false)
          setJuegos(juegosFiltrados)
        }, 2000)
      })
    }
  }, [category])

  return (
    <>
      {
        loading && 
        <main className="row">
          <RotatingLines strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}/>
        </main>
      }
      {
        !loading && 
        <>
          <h1 className="display-4 animate__animated animate__flipInX">{greeting} {category}</h1>
          <main className="row">
            <ItemList juegos={juegos} plantilla={"Item"} />
          </main>
        </>
      }
   </>
  )
}

export default ItemListContainer