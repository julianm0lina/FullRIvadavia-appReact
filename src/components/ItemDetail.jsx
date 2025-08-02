import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <div className="container my-4">
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} style={{ maxWidth: '300px' }} />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <ItemCount
        stock={10}
        initial={1}
        onAdd={(cantidad) => alert(`Agregaste ${cantidad} unidades al carrito`)}
      />
    </div>
  );
};

export default ItemDetail;
