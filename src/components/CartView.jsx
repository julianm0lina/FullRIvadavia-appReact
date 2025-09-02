
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Componente que muestra el carrito de compras
 * 
 * @returns Un JSX que muestra los productos en el carrito
 * con sus respectivos precios y cantidades, y un boton
 * para eliminar cada producto. Tambien muestra el total
 * a pagar y un boton para borrar el carrito y otro para
/*******  342b86cb-3d62-4749-a0da-d375ee25e78b  *******/const CartView = () => {
  const  {cart, clear, removeItem, cartTotal} = useContext (CartContext);
  return (
    <div>
      <h1>Tu Caririto</h1>
      <div>
        {cart.map((prod) => (
          <div key={prod.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
            <img src={prod.img} alt={prod.nombre} style={{width: '50px'}} />
            <span>{prod.nombre}</span>
            <span>$ {prod.precio}</span>
            <span>{prod.quantity} Unidades</span>
            <span>Subtotal: $ {prod.quantity * prod.precio}</span>
            <button className='btn btn-danger' onClick={() => removeItem(prod.id)} >X</button>
          </div>
        ))
        }

      </div>
      <span>Total a pagar: $ {cartTotal()}, </span>
      <div>

            <button className='btn btn-danger' onClick={clear}>Borrar Carrito</button>
            <Link className='btn btn-success' to={'/checkout'}>Comprar</Link>

      </div>
    </div>
  )
}

export default CartView
