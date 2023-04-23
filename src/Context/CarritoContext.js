import { useState, createContext, useContext } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {

  const [carrito, setCarrito] = useState([]) 

  const isInCart = (id) => carrito.some(jueg => jueg.id === id)

  const addGame = (juego, quantity) => {
    if (isInCart(juego.id)) {
      const index = carrito.findIndex(jueg => jueg.id === juego.id)
      const aux = [...carrito]
      aux[index].quantity = quantity
      setCarrito(aux)

    } else {
      const newGame = {
        ...juego,
        quantity: quantity
      }

      setCarrito([...carrito, newGame])
    }
  }

  const removeGame = (id) => setCarrito(carrito.filter(jueg => jueg.id !== id))
  
  const emptyCart = () => setCarrito([])

  const getItemQuantity = () => carrito.reduce((acc, jueg) => acc += jueg.quantity, 0)
  
  const totalPrice = () =>  carrito.reduce((acc, jueg) => acc += (jueg.quantity * jueg.price), 0)
  

  return (
    <CarritoContext.Provider value={{ carrito, addGame, removeGame, emptyCart, totalPrice, getItemQuantity }}>
      {props.children}
    </CarritoContext.Provider>
  )
}