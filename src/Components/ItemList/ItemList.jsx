import React from 'react'
import Item from '../Item/Item'
const ItemList = ({juegos}) => {
  return (
    <>
      {juegos.map(juego => <Item key={juego.id} juego={juego} />)}
    </>
  )
}

export default ItemList