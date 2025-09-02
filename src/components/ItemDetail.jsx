import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false); // estado para controlar ItemCount

  const onAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true); // ocultar ItemCount
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="card mb-3" style={{ maxWidth: "540px", margin: "0 auto" }}>
      <h1>Detalle de: {product.nombre}</h1>
      <img
        src={product.img}
        className="img-fluid rounded-start"
        alt={product.nombre}
      />
      <h5 className="card-title">{product.nombre}</h5>
      <p className="card-text">{product.descripcion}</p>
      <p className="card-text">
        <strong>Precio: </strong>${product.precio}
      </p>
      <p className="card-text">
        <strong>Stock disponible: </strong>{product.stock}
      </p>

      {!added ? (
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
      ) : (
        <div className="mt-3">
          <p className="text-success">Producto agregado al carrito ✅</p>
          <Link className="btn btn-primary me-2" to="/cart">
            Ir al carrito
          </Link>
          <Link className="btn btn-secondary" to="/">
            Seguir comprando
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
