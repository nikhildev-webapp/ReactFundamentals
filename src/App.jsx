import { useState } from 'react'
import RandomDogImage from './API/RandomDogImage'
import './App.css'
import ExerciseComponent from './components/ExerciseComponent'
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 20px",
    marginTop: "20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

function App() {
  const [reloadDog, setReloadDog] = useState(false);
  const handleClick = () => {
    setReloadDog((prev)=>!prev)
  }
  return (
    <>
      <ExerciseComponent />
      {/* Add your exercise component here⬇️*/}
      <div style={styles.container}>
        <h1>Random Dog Image</h1>
        <RandomDogImage reloadDog={reloadDog}/>
        <button onClick={handleClick} style={styles.button}>GetNewDog</button>
      </div>
    </>
  )
}

export default App
