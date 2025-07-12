import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios'
import UserCard from './UserCard/UserCard';
function App() {
  const [apiData,setApiDate]=useState([]);
  useEffect(()=>{
    
    async function getAPIDate(){
      await axios.get("https://dummyjson.com/users").then(data=>{
        console.log(data.data.users)
        setApiDate(data.data.users)
    }).catch(e=>console.log(e))
    }
    getAPIDate()
    console.log(apiData);
  },[])
  return (
    <>
    <table>
      {apiData.map(data=>{return <UserCard firstName={data?.firstName} lastName={data.lastName} email={data.email}/>})}
      </table>
    </>
  );
}

export default App;
