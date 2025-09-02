import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div padding="3" className='text-center'>
      <h2>Tu carrito esta vacio!</h2>
      <h4>Te invitamos a ver nuestros productos</h4>
      <Link className='btn btn-primary' to="/">Ver productos</Link>
    </div>
  )
}

export default EmptyCart
