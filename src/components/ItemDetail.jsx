import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { addItem, cart } = useContext(CartContext)
  const onAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} unidades al carrito`);
    addItem(product, quantity)
  }
  console.log(cart, "contexto en itemdetail");
   if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="card mb-3" style={{ maxWidth: "540px", margin: "0 auto" }}>
      <h1>Detalle de: {product.nombre}  </h1>


      <img src={product.img} className="img-fluid rounded-start" alt={product.nombre} />



      <h5 className="card-title">{product.nombre}</h5>
      <p className="card-text">{product.descripcion}</p>
      <p className="card-text"><strong>Precio: </strong>${product.precio}</p>
      <p className="card-text"><strong>Stock disponible: </strong>{product.stock}</p>
      <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />



    </div>
  )
};


export default ItemDetail;