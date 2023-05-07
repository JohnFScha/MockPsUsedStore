import React from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.scss'
import { useNavigate } from 'react-router-dom';
import { useCarritoContext } from '../../Context/CarritoContext'
import { updateGames, getGame, createOrdenCompra } from '../../firebase/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
  const { carrito, totalPrice, emptyCart } = useCarritoContext()
  const { register, handleSubmit, reset } = useForm();
  let navigate = useNavigate()

  const onSubmit = (client) => {
    // Como validacion extra del email, chequeamos que el email y el email repetido sean iguales. Si lo son, continuamos con la compra 
    if(client.Email === client.repeatedEmail) {
      // Creamos una copia del carrito para evitar su modificacion
      const aux = [...carrito];
  
      // Recorremos el carrito con un loop
      aux.forEach(juegosEnCarrito => {
  
        // Tomamos el juego en el carrito por su ID
        getGame(juegosEnCarrito.id).then(juegoBDD => {
  
          // Si el stock es mayor a la cantidad agregada en el carrito, actulizamos el valor del stock y actualizamos la base de datos
          if (juegoBDD.stock >= juegosEnCarrito.quantity) {
            juegoBDD.stock -= juegosEnCarrito.quantity
            updateGames(juegoBDD.id, juegoBDD)
  
          // Si no es asi, entonces emitimos un toast/alerta que informe que la cantidad añadida supera el stock
          } else {
            toast.warn('The quantity added exceeds the available stock!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
        })
      })
  
      // Creamos una nueva copia del carrito para evitar su modificacion
      const aux2 = aux.map(juego => ({id: juego.id, quantity: juego.quantity, price: juego.price}))
  
      // Creamos la orden de compra con los datos del Form + el total de los juegos añadidos y la fecha de hoy
      createOrdenCompra(client, totalPrice(), aux2, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
      .then(ordenCompra => {
        // Si la orden de compra se creo satisfactoriamente, renderizamos un toast que informe de ello.
        toast.success(`Thank you for shopping with us, your shop order: ${ordenCompra.id}, for a total of: $${totalPrice()}. We'll get back via e-mail!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        // Seguidamente, vaciamos el carrito, reseteamos el form y volvemos a la pagina principal.
        emptyCart()
        reset()
        navigate('/')
      })
      .catch(error => {
        console.error(error)
      })
     
    // Si el email no coincide emitimos un toast que informe sobre este error.  
    } else {
      toast.error('Check email corresponds with repeated email!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
   
  return (
    <div className="container animate__animated animate__fadeIn" id='formContainer'>
      <ToastContainer />
      <h1 className="display-4" id='formHeader'>Checkout Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row" id='formInput'>
          <div className="col-6">
            <input type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
          </div>
          <div className="col-6">
            <input type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
          </div>
        </div>
        <input type="text" placeholder="DNI" {...register("DNI", {required: true, maxLength: 8})} />
        <input type="text" placeholder="Address" {...register("address", {required: true, maxLength: 80})} />
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="text" placeholder="Repeat Email" {...register("repeatedEmail", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("number", {required: true, minLength: 6, maxLength: 12})} />

        <input type="submit"/>
    </form>
    </div>
  );
}