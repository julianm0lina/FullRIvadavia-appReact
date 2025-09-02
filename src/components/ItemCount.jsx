import { useState } from 'react';
import Swal from 'sweetalert2';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false); // Para ocultar después de agregar

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire('Stock máximo', 'No hay más unidades disponibles', 'info');
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    setAdded(true); // Oculta después de agregar
    Swal.fire('Agregado', `Se agregaron ${count} unidades al carrito`, 'success');
  };

  if (added) {
    return <p>Producto agregado al carrito</p>; // Mensaje simple cuando se agregó
  }

  return (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
      <div>
        <button className='btn btn-danger me-2' onClick={restar}>-</button>
        <span className='btn btn-light'>{count}</span>
        <button className='btn btn-success ms-2' onClick={sumar}>+</button>
      </div>
      <button className='btn btn-primary' onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
