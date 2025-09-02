import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, clear, removeItem, cartTotal } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Tu Carrito</h1>

      {cart.map((prod) => (
        <div 
          key={prod.id} 
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-3"
        >
          <img src={prod.img} alt={prod.nombre} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
          
          <div className="flex-grow-1 ms-3">
            <h5>{prod.nombre}</h5>
            <p className="mb-1">Precio unitario: $ {prod.precio}</p>
            <p className="mb-0">Cantidad: {prod.quantity}</p>
          </div>

          <div className="text-end">
            <p className="mb-1">Subtotal: $ {prod.quantity * prod.precio}</p>
            <button className="btn btn-danger btn-sm" onClick={() => removeItem(prod.id)}>Eliminar</button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4>Total a pagar: $ {cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0)}</h4>
          <div>
            <button className="btn btn-danger me-2" onClick={clear}>Vaciar Carrito</button>
            <Link className="btn btn-success" to="/checkout">Finalizar Compra</Link>
          </div>
        </div>
      )}

      {cart.length === 0 && (
        <p className="text-center mt-4">No hay productos en tu carrito.</p>
      )}
    </div>
  );
};

export default CartView;
