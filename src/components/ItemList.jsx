import React from 'react';
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {items.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
