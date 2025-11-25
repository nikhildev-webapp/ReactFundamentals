import React, { useEffect, useState } from "react";

const RandomDogImage = ({reloadDog}) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const getDog = async () => {
        setLoading(true);
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        setImage(data.message);
        setLoading(false)
    }

    useEffect(()=>{getDog()},[reloadDog])
  return (
    <>
          <div>
              {loading ? (
                  <p>Loading...</p>
              ) : (
                      <img src={image} alt="Dog" style={{width:'300px'}}/>
              )}
      </div>
    </>
  );
};

export default RandomDogImage;
