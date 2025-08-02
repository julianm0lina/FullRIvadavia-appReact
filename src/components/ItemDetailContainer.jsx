import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(itemId)
      .then((prod) => setProducto(prod))
      .catch((error) => console.error("Error al cargar producto:", error));
  }, [itemId]);

  if (!producto) return <p>Cargando producto...</p>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
