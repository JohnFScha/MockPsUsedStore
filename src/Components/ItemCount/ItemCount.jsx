import React from 'react'
import useCount from '../../Hooks/useCount.js'
import './ItemCount.scss'


const ItemCount = ({ initial, min, max, onAdd }) => {

  const {count, add, substract, reset } = useCount(initial, min, max)

  return (
    <>
      <div className='container count'>
        <button className="btn btn-dark" onClick={substract}>-</button>
        {count}
        <button className="btn btn-dark" onClick={add}>+</button>
        <button className="btn btn-dark" onClick={reset}>Reset</button>
      </div>
      <button className="btn btn-light" onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount