import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [mode,setMode]=useState({
    backGroundColor:"white",
    color:"black"
  })

  function toggleTheme(){
    if(mode.backGroundColor==="white"){
      setMode({
        backGroundColor:"black",
        color:"white"
      })
      localStorage.setItem('theme','dark');
    }else{
      setMode({
    backGroundColor:"white",
    color:"black"
  });
  localStorage.setItem('light','dark');
    }
  }
  return (
    <>
    <div className='container' style={mode}>
      <button onClick={toggleTheme}>Hi Click Me</button>
    </div>
    </>
  );
}

export default App;
