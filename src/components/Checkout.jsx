import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [comprador, setComprador] = useState({
    name: '',
    lastname: '',
    adress: '',
    email: '',
    secondEmail: ''
  });
  const [orderId, setOrderId] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const { cart, cartTotal, clear } = useContext(CartContext);

  const handleChange = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    // Validar emails
    if (comprador.email !== comprador.secondEmail) {
      setErrorEmail('Los emails no coinciden.');
      return;
    }

    // Crear orden
    const order = {
      comprador: {
        name: comprador.name,
        lastname: comprador.lastname,
        adress: comprador.adress,
        email: comprador.email
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    };

    const ventas = collection(db, "ventas");
    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (orderId) {
    return (
      <div className="text-center mt-4">
        <h2>¡Gracias por su compra!</h2>
        <p>Su número de orden es: <strong>{orderId}</strong></p>
        <Link className="btn btn-primary" to="/">Seguir comprando</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      <h1 className="mb-3">Complete sus datos</h1>
      <form onSubmit={finalizarCompra}>
        <input 
          className="form-control mb-2" 
          name="name" 
          placeholder="Ingrese su nombre" 
          type="text" 
          value={comprador.name}
          onChange={handleChange} 
          required
        />
        <input 
          className="form-control mb-2" 
          name="lastname" 
          placeholder="Ingrese su apellido" 
          type="text" 
          value={comprador.lastname}
          onChange={handleChange} 
          required
        />
        <input 
          className="form-control mb-2" 
          name="adress" 
          placeholder="Calle Falsa 1234" 
          type="text" 
          value={comprador.adress}
          onChange={handleChange} 
          required
        />
        <input 
          className="form-control mb-2" 
          name="email" 
          placeholder="Ingrese su email" 
          type="email" 
          value={comprador.email}
          onChange={handleChange} 
          required
        />
        <input 
          className="form-control mb-2" 
          name="secondEmail" 
          placeholder="Repita su email" 
          type="email" 
          value={comprador.secondEmail}
          onChange={handleChange} 
          required
        />
        {errorEmail && <p className="text-danger">{errorEmail}</p>}
        <button className="btn btn-primary w-100" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
