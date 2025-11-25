import React from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$49.99",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: "$59.99",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: "$39.99",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: "$29.99",
      image: "https://via.placeholder.com/300",
    },
    ];
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};
  return (
      <>
          <div style={styles.grid}>
              {products.map((items) => (
                  <ProductCard
                      key={items.id}
                      title={items.title}
                      price={items.price}
                      image={items.image}
                  />
              ))}
          </div>
      </>
  )
}

export default ProductList