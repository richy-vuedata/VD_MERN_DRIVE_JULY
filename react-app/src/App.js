import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // const [data, setData] = useState([])
  const [value, setValue] = useState([])

  
  // useEffect( async () => {
  //   let timerOut 

  // })

  // const handleData = async () => {
  //   console.log("Pirate")
  //   const response = await axios.get("https://fakestoreapi.com/products")
  //   const data = response.json
  //   setData(data)
  // }

  return (
    <div className="App">
      <p>Pirate</p>
      {/* <button onClick={handleData}>Get Data</button>
      {data ? 
      <div>
        {data.map((each) => {
          <h1>{each.title}</h1>
        })}
      </div> 
      
      : null} */}
      <input type='text' value={(e) => e.value} />
    </div>
  );
}

export default App;

