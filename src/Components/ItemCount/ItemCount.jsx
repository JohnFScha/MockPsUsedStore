import React from 'react'
import './ItemCount.scss'
import { useState } from 'react'

const ItemCount = (stock, initial, onAdd) => {
  const [quantity, setQuantity] = useState(initial)

  const add = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const substract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="container counter">
      <div className=" container control">
        <button className="btn btn-outline-warning" onClick={substract()}>-</button>
        <h1 className="display-1">{quantity}</h1>
        <button className="btn btn-outline-success" onClick={add()}>+</button>
      </div>
      <div className="container agregar">
        <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ItemCount