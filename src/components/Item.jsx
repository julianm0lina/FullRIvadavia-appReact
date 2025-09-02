import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={prod.img} alt={prod.nombre} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>{prod.descripcion}</Card.Text>
        <Card.Text>Precio: ${prod.precio}</Card.Text>
        
        <Link to={`/item/${prod.id}`}>
          <Button variant="primary">Ver más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
