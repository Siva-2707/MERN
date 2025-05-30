import React from 'react'
import Header from '../../components/Header.jsx'
import { Container, Row, Col} from 'react-bootstrap';
import ProductCaard from '../../components/ProductCard.jsx';
import AddProduct from './AddProduct.jsx';

export const Product = () => {

  const sampleProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise cancelling over-ear headphones",
      banner:
        "https://res.cloudinary.com/da3w329cx/image/upload/v1683056487/samples/landscapes/nature-mountains.jpg",
      price: 120,
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Smart wearable with health tracking",
      banner:
        "https://res.cloudinary.com/da3w329cx/image/upload/v1683056500/cld-sample-5.jpg",
      price: 80,
    },
    {
      id: 3,
      name: "Laptop",
      description: "14-inch Full HD display, 256GB SSD",
      banner:
        "https://res.cloudinary.com/da3w329cx/image/upload/v1683056499/cld-sample-3.jpg",
      price: 600,
    },
  ];

  return (
    <section>
      <Header/>
      <Container className="mt-5">
        <div className="d-flex justify-content-end mb-4">
          <AddProduct/>
        </div>

        {sampleProducts.length === 0 ? (
           <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "200px" }}
            >
              <EmptyComponent message="We're currently out of stock" />
            </div>
        )
        : (
          <Row className="g-4">
            {sampleProducts.map((product) => (
              <Col key={product.id} xs={6} sm={6} md={5} lg={3} className="mb-4 mx-3">
                <ProductCaard product={product} />
              </Col>
            ))}
          </Row>
        )}

      </Container>
    </section>
  )
}

export default Product;
