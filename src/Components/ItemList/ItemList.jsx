import React from 'react'
import Item from '../Item/Item'
import ItemCart from '../ItemCart/ItemCart'
const ItemList = ({juegos, plantilla}) => {
  return (
    <>
      {
        plantilla === "Item" ?
        juegos.map(juego => <Item key={juego.id} juego={juego} />)
        :
        juegos.map(juego => <ItemCart key={juego.id} juego={juego} />)
      }
    </>
  )
}

export default ItemList