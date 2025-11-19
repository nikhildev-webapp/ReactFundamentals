import React, { useState } from "react";

const CharacterCounter = () => {
    const [inputValue, setInputValue] = useState('');
    const CHARACTER_LIMIT = 200;

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        if (newValue.length <= CHARACTER_LIMIT) {
            setInputValue(newValue)
        }
    }

    const currentCount = inputValue.length;
    return (
    <>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h1>Exercise-CharceterCounter</h1>
        <textarea
          placeholder="type something"
          value={inputValue}
          onChange={handleInputChange}
          rows={5}
          style={{ width:'100%',padding:'10px', fontSize:'16px',resize:'vertical'}}
              ></textarea>
              
              <div>
                  character type: <strong>{currentCount}</strong>/{CHARACTER_LIMIT}
              </div>
      </div>
    </>
  );
};

export default CharacterCounter;
