import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
      <div>
        <button className='btn btn-danger me-2' onClick={restar}>-</button>
        <span className='btn btn-light'>{count}</span>
        <button className='btn btn-success ms-2' onClick={sumar}>+</button>
      </div>
      <button className='btn btn-primary' onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

