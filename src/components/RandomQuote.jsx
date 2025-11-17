import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const RandomQuote = () => {
   const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    const API_KEY = "+Hee1SqbucuCxyF28ik+Dw==tRKVX6vSg1Avt6bY";
    // Function to fetch quote
  const getQuote = () => {
    setLoading(true);
    setError("");

    fetch("https://api.api-ninjas.com/v1/quotes?category=success", {
      headers: { "X-Api-Key": API_KEY }
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load quote. Try again.");
        setLoading(false);
      });
  };

  // Load quote auto on page load
  useEffect(() => {
    getQuote();
  }, []);
  return (
      <div style={styles.container}>
      <h2 style={styles.title}>✨ Daily Quote Generator ✨</h2>

      {/* Loading */}
      {loading && <p style={styles.loading}>Loading...</p>}

      {/* Error Message */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Quote Box */}
      {!loading && quote && (
        <div style={styles.card}>
          <p style={styles.text}>“{quote.quote}”</p>
          <p style={styles.author}>— {quote.author}</p>
        </div>
      )}

      {/* Button */}
      <button style={styles.btn} onClick={getQuote}>
        🔄 Get New Quote
      </button>
    </div>
  )
}
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px"
  },
  loading: {
    fontSize: "18px",
    color: "#555"
  },
  error: {
    fontSize: "18px",
    color: "red"
  },
  card: {
    padding: "20px",
    background: "#f1f1f1",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  text: {
    fontSize: "20px",
    fontStyle: "italic",
    marginBottom: "10px"
  },
  author: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333"
  },
  btn: {
    padding: "12px 20px",
    fontSize: "18px",
    background: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
export default RandomQuote