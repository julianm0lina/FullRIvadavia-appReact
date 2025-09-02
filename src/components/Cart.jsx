import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const { cart } = useContext(CartContext);
  return (
    <div>
        {cart.length ? <CartView /> : <EmptyCart />}
    </div>
  )
}

export default Cart
