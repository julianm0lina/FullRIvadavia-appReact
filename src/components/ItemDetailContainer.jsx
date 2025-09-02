import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductoPorId } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const { itemId } = useParams(); // esto ya viene como string
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setLoading(true);
    // referencia del documento

    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
      .then((doc) => {
        if (doc.data()) {
          setProducto({ id: doc.id, ...doc.data() });
        }else {
          setInvalid(true);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
      
    
  }, [itemId]);

  if (invalid) return <div><h2>Producto no encontrado</h2> <Link className="btn btn-primary" to="/">Volver al inicio</Link>;</div>
  if (error) return <p>Error: {error.message}</p>;


  return (
  <>
    {loading && <LoaderComponent />}
    {!loading && producto && <ItemDetail product={producto} />}
    {!loading && !producto && <p>Producto no encontrado</p>}
  </>
)
};

export default ItemDetailContainer;
