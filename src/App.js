import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  
  const [isActiveLight, setIsActiveLight] = useState("red");

  const [isTrafficLight, setIsTrafficLight] = useState({
    red: {
      next: "yellow",
      time: 1
    },

    yellow: {
      next: "green",
      time: 2
    },

    green: {
      next: "red",
      time: 1
    }
      
  })

  useEffect(() => {
     const timerId = setTimeout(() => {
      setIsActiveLight(isTrafficLight[isActiveLight].next);

     },isTrafficLight[isActiveLight].time * 1000)

     return () => {
      clearTimeout(timerId);
     }

  },[isTrafficLight, isActiveLight])
  
const handleLightChange = (light) => {
  setIsActiveLight(light)
}
return (
    <div>
    <div style={{ fontSize: "20px", fontWeight: "bold", paddingTop: "50px"}}> Traffic Light</div>
     
  
    <button style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", color: "red", borderRadius: "30%"}} onClick={() => handleLightChange("red")}>Red</button>
    <button style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", color: "yellow", borderRadius: "30%"}} onClick={() => handleLightChange("yellow")}>Yellow</button>
    <button style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", color: "green", borderRadius: "30%"}} onClick={() => handleLightChange("green")}>Green</button>

  
    <div style={{ fontSize: "40px"}}>
    <p style={{ width: "50px", height: "50px", borderRadius: "50%", background: "red", opacity: `${isActiveLight === "red" ? 1: 0.2}`}} ></p>
    <p style={{ width: "50px", height: "50px", borderRadius: "50%", background: "yellow", opacity: `${isActiveLight === "yellow" ? 1: 0.2}`}}></p>
    <p style={{ width: "50px", height: "50px", borderRadius: "50%", background: "green", opacity: `${isActiveLight === "green" ? 1: 0.2}`}}></p>
    </div>
    </div>
  );
}
  


export default App;
