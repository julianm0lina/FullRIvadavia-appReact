import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <LoaderComponent />;

  if (error)
    return (
      <div className="text-center mt-4">
        <h2>Error al cargar el producto</h2>
        <p>{error.message}</p>
        <Link className="btn btn-primary mt-2" to="/">Volver al inicio</Link>
      </div>
    );

  if (invalid)
    return (
      <div className="text-center mt-4">
        <h2>Producto no encontrado</h2>
        <Link className="btn btn-primary mt-2" to="/">Volver al inicio</Link>
      </div>
    );

  return (
    <div>
      {producto && <ItemDetail product={producto} />}
    </div>
  );
};

export default ItemDetailContainer;
