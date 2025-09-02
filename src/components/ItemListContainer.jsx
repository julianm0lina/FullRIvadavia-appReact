import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import { productos } from "../mock/AsyncService";
const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const { categoryId } = useParams(); // Leemos el parámetro dinámico de la URL

useEffect(() => {
    setLoading(true);
    // refeencia de mi base de datos
    const productosColeccion = categoryId ?  query(collection(db, "productos"), where("categoria", "==", categoryId)) : collection(db, "productos");
    //pedir los documentos
    getDocs(productosColeccion)

    .then((res) => {
      const list = res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setData(list);
})
.catch((error) => {
  console.log(error)
})
.finally(() => setLoading(false)); 
}, [categoryId]); // Se vuelve a ejecutar cada vez que cambia la categoría


  // useEffect(() => {
  //   setLoading(true);
  //   const fetchData = async () => {
  //     try {
  //       const productos = categoryId
  //         ? await getProductosPorCategoria(categoryId)
  //         : await getProductos();

  //       setItems(productos);
  //     } catch (error) {
  //       console.error("Error al obtener los productos:", error);
  //     }
  //   };

   
  //   fetchData().finally(() => setLoading(false));
  
const subirDataFirebase = () => {
        console.log('click!')
        const productosColeccion = collection(db, "productos")
        productos.map((prod) => addDoc(productosColeccion, prod))
 }


  return (
    <>
    {/* <button onClick={subirDataFirebase}>subir data</button> */}
    {loading 
      ? <LoaderComponent/> 
    :<div className="item-list-container">
      {!categoryId && <h1>{greeting}</h1>}
      <ItemList data={data} />
    </div>}
    </>
  );
};

export default ItemListContainer;
