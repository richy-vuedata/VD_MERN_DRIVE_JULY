import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'

function App() {
const [data,setData] = useState([])
const fetchApi=async()=>{
  try{
const fetchUrl = await fetch('https://reqres.in/api/users?page=2')
  
  const result =await fetchUrl.json()  
    setData(result?.data)
    console.log({result:result.data});

  return result

  }catch(error){
    console.log(error);
    
  }
}

console.log({data:data?.map((data)=>data)});

useEffect(()=>{
  const value =fetchApi()
},[])

  return (
    <div className="App">
      {/* <table> */}
        {data?.map((data)=>(
          <li>
            <ul>{data?.id}</ul>
            <ul>{data?.email}</ul>

            </li>
        ))}
      {/* </table> */}
    </div>
  );
}

export default App;
