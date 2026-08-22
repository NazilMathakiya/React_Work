import React, { useState } from 'react'

function App() {
  const [selected,setSelected]=useState("");
  const msg=()=>{
    if(selected!=""){
      return `Selected Color: ${selected}`;
    }
  }

  return(
    <div>
      <h1>Colour Selector</h1>
      <div>
        <button onClick={()=> setSelected("Red")}>Red</button>
        <button onClick={()=> setSelected("Blue")}>Blue</button>
        <button onClick={()=> setSelected("Green")}>Green</button>
      </div>
    <h2>{msg()}</h2>
    </div>
  )
}

export default App