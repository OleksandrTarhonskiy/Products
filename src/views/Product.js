import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className="products__item">
      <Card.Img variant="top" src={product.image} alt="product-img" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.sku}</Card.Text>
        <div className="d-flex">
          <Card.Text className="me-1">Sizes:</Card.Text>
            {
              product.sizes.map((s, i, arr) =>
                <Card.Text key={s.id} className="me-1">
                  {`${s.name}${i !== arr.length - 1 ? ',' : ''}`}
                </Card.Text>
              )
            }{' '}
        </div>
        <div className="d-flex">
          <Card.Text className="me-1">Colors:</Card.Text>
            {
              product.colors.map((color, i, arr) =>
                <Card.Text key={color.id} className="me-1">
                  {`${color.name}${i !== arr.length - 1 ? ',' : ''}`}
                </Card.Text>
              )
            }{' '}
        </div>
        <Badge bg="success">{`${product.price} $`}</Badge>
      </Card.Body>
    </Card>
  );
}

export default Product;