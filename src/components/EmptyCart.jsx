import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className='text-center p-3'>
      <h2>Tu carrito está vacío!</h2>
      <h4>Te invitamos a ver nuestros productos</h4>
      <Link className='btn btn-primary' to="/">Ver productos</Link>
    </div>
  );
};

export default EmptyCart;
