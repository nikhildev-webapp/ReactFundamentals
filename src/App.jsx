import { useState } from 'react'
import RandomDogImage from './API/RandomDogImage'
import './App.css'
import ExerciseComponent from './components/ExerciseComponent'
import Users from './API/Users';
import ProductList from './Product/ProductList';
import RecipeList from './RecipeCard/RecipeList';
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
  headin: {
    textAlign: 'center',
    marginTop: '20px',
    fontFamily:'Arial'
  }
};

function App() {
  //*⬇️ is used for fetch random dog image
  // const [reloadDog, setReloadDog] = useState(false);
  // const handleClick = () => {
  //   setReloadDog((prev)=>!prev)
  // }

  return (
    <>
      <ExerciseComponent />
      {/* Add your exercise component here⬇️*/}
      {/* ⬇️RandomDog Image fetch*/}
      {/* <div style={styles.container}>
        <h1>Random Dog Image</h1>
        <RandomDogImage reloadDog={reloadDog}/>
        <button onClick={handleClick} style={styles.button}>GetNewDog</button>
      </div> */}
      {/* ⬇️reusable productcard */}
      {/* <div>
        <h1 style={styles.headin}>ProductCard-List</h1>
        <ProductList/>
     </div> */}
    
    </>
  )
}

export default App
