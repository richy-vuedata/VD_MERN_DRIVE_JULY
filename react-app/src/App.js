import logo from './logo.svg';
import './App.css';
import React ,{useState}from 'react';
//import debounce from 'debounce'

function App() {

  const [search,setSearch]=useState('')


  const SearchFunction=debounce((e)=>{
    setSearch(e.target.value)
  },500);

  const fetchItem =async()=>{

    

  }





  

  return (
    <div className="App">
    <form>
       <input type={text} onChange={(e)=>SearchFunction(e)}></input>
    </form>
    </div>
  );
}

export default App;
