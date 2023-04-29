import React from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.scss'
import { useCarritoContext } from '../../Context/CarritoContext'

export default function Checkout() {
  const { carrito } = useCarritoContext()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = cliente => console.log(cliente);
  console.log(errors);
  const aux = [...carrito]
  
   
  return (
    <div className="container-fluid animate__animated animate__fadeInRight" id='formContainer'>
      <h1 className="display-4" id='formHeader'>Checkout Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row" id='formInput'>
          <div className="col">
            <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
          </div>
          <div className="col">
            <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
          </div>
        </div>
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <div className="row" id='formInput'>
          <div className="col">
            <input type="text" placeholder="Card number" {...register("Card number", {})} />
          </div>
          <div className="col">
            <input type="datetime" placeholder="Expiration date" {...register("Expiration date", {})} />
          </div>
        </div>
        <input type="text" placeholder="CCV" {...register("CCV", {})} />

        <input type="submit" />
    </form>
    </div>
  );
}