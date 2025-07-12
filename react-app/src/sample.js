import { useState } from "react";


function Sample() {
    const[name ,Setname]=useState("");
    const[email,Setemail]=useState("");
    const[password,Setpassword]=useState("");
    const[confirmpass,Setconfirmpass]=useState("");
    const[hidden,Sethidden]=useState("hidden")
    
  return (
    <div className="App">
    <input type="text" className="" placeholder="Your Name" required onChange={(e)=>Setname(e.input.value)}>name</input>
    <input type="text"  placeholder="Email" required  onChange={(e)=>Setemail(e.input.value)}>Email</input>
    <input type="text"   placeholder="Password" required  onChange={(e)=>{Setpassword(e.input.value)}}>Password</input>
    <input type="text"   placeholder="Confirm Password" required  onChange={(e)=>{Setconfirmpass(e.input.value)}}>Password</input>
    
    <button onClick={()=>compare}>Submit</button>
    </div>
  );
}

export default Sample;
