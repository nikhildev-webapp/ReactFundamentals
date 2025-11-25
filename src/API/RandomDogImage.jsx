import React, { useEffect, useState } from "react";

const RandomDogImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchDogImage = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("dog.ceo");
      if (!response.ok) {
        throw new Error("Network issue or Api not working");
      }
      const data = await response.json();
      setImageUrl(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage;
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Random Dog Generator</h1>

        <button onClick={fetchDogImage} disabled={isLoading}>
          {isLoading ? "Fetching..." : "Get New Dog Image"}
        </button>

        <div style={{ marginTop: "20px" }}>
          {isLoading && <p>Loading image...</p>}

          {error && <p style={{ color: "red" }}>Error: {error}</p>}

          {imageUrl && !isLoading && (
            <img
              src={imageUrl}
              alt="A random dog"
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                borderRadius: "10px",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RandomDogImage;
