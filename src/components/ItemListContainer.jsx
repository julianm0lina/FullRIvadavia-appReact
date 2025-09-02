import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
// import { productos } from "../mock/AsyncService";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { categoryId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    setError(null);

    const productosColeccion = categoryId 
      ? query(collection(db, "productos"), where("categoria", "==", categoryId)) 
      : collection(db, "productos");

    getDocs(productosColeccion)
      .then((res) => {
        const list = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(list);
      })
      .catch((err) => {
        console.error(err);
        setError("Error al cargar los productos");
      })
      .finally(() => setLoading(false)); 
  }, [categoryId]);

  // const subirDataFirebase = () => {
  //     console.log('click!')
  //     const productosColeccion = collection(db, "productos")
  //     productos.map((prod) => addDoc(productosColeccion, prod))
  // }

  if (loading) return <LoaderComponent />;

  if (error) return (
    <div className="text-center mt-4">
      <h2>{error}</h2>
    </div>
  );

  return (
    <div className="item-list-container">
      {!categoryId && <h1 className="text-center mt-3">{greeting}</h1>}
      <ItemList data={data} />
      {/* <button onClick={subirDataFirebase}>subir data</button> */}
    </div>
  );
};

export default ItemListContainer;
