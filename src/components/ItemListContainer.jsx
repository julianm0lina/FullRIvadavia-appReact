import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../mock/AsyncService";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams(); // Leemos el parámetro dinámico de la URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productos = categoryId
          ? await getProductosPorCategoria(categoryId)
          : await getProductos();

        setItems(productos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchData();
  }, [categoryId]); // Se vuelve a ejecutar cada vez que cambia la categoría

  return (
    <div className="item-list-container">
      {!categoryId && <h1>{greeting}</h1>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
