import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
    const compradorData = (e) => {
        setComprador(
            {  
                ...comprador, 
                [e.target.name]: e.target.value
            }
  ) 
    }
    console.log(comprador)

    const finalizarCompra = (e) => {
        e.preventDefault()
       let order = {
        comprador: comprador,
        compras: cart,
        total : cartTotal(),
        date: serverTimestamp(),

       }
       
    const ventas = collection(db, "ventas")
    addDoc(ventas, order)
    .then((res) => {
        setOrderId(res.id)
        clear()
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("terminado")
    })   
       


    }
        

  return (
    <>
    {
    orderId 
     ? <div>
        <h2>Gracias por su compra!</h2>
        <p> Su numero de orden es: {orderId}</p>
        <Link className='btn btn-primary' to="/">Seguir comprando</Link>
     </div>
     :
     <div>
      <h1>Complete con sus datos</h1>
      <form onSubmit={finalizarCompra} >
        <input className='form-control' name='name' placeholder='ingrese su nombre' type="text" onChange={compradorData}/>
        <input className='form-control' name='lastname' placeholder='ingrese su apellido' type="text" onChange={compradorData} />
        <input className='form-control' name='adress' placeholder='Calle Falsa 1234' type="text" onChange={compradorData} />
        <input className='form-control' name='email' placeholder='Ingrese su email' type="email" onChange={compradorData} />
        <input className='form-control' name='second-email' placeholder='Repita su email' type="email" onChange={(e) => {setValidMail(e.target.value)}} />
        <button className='btn btn-primary' type='submit'>Enviar</button>
      </form>
      
    </div>
    }
    </>
  )
 
}

export default Checkout
