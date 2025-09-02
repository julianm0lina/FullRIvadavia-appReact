import React from 'react';
import Item from "./Item";

const ItemList = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center mt-4">No hay productos disponibles.</p>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
