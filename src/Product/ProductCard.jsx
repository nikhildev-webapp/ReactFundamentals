import React from 'react'

const ProductCard = ({ title, price, image }) => {
    const styles = {
        card: {
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
            fontFamily: "Arial",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        },
        image: {
            width: "100%",
            borderRadius: "10px",
            marginBottom: "10px",
        },
        title: {
            fontSize: "18px",
            margin: "5px 0",
        },
        price: {
            fontSize: "16px",
            color: "green",
            marginBottom: "10px",
        },
        button: {
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
        }
    }
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.price}>{price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  )
}

export default ProductCard