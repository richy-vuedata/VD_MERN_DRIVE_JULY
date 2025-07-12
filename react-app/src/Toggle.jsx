import { useState } from "react";
import './Toggle.css'



const Toggle = ()=> {
    const[theme, setTheme] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        setTheme(theme ? false : true)
    }
  return (
    <div className="toggle">
        <div className= {theme ? "light":"dark"}>
            hi
        </div>
        <button onClick={handleClick}>switch</button>
    </div>
  );
}

export default Toggle