import React from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.scss'

export default function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="text" placeholder="Card number" {...register("Card number", {})} />
      <input type="datetime" placeholder="Expiration date" {...register("Expiration date", {})} />
      <input type="text" placeholder="CCV" {...register("CCV", {})} />

      <input type="submit" />
    </form>
  );
}