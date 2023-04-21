import React from 'react'
import useCount from '../../Hooks/useCount.js'
import './ItemCount.scss'


const ItemCount = ({ initial, min, max, onAdd }) => {

  const {count, add, substract, reset } = useCount(initial, min, max)

  return (
    <>
      <div className='container count'>
        <button className="btn btn-outline-primary" onClick={substract}>-</button>
        {count}
        <button className="btn btn-outline-primary" onClick={add}>+</button>
        <button className="btn btn-outline-danger" onClick={reset}>Reset</button>
      </div>
      <button className="btn btn-success" onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount