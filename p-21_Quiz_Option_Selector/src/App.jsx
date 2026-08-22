import React, { useState } from 'react'

function App() {
  const [selected,setSelected]=useState("");
  const msg=()=>{
    if(selected==="Delhi"){
      return `Your Answer ${selected} is Correct`;
    }
    else{
      return `Your Answer ${selected} is incorrect`
    }
  }

  return(
    <div>
      <h1>Quiz Option Selector</h1>
      <div>
        <h2><b>Ques:</b> Capital of India?</h2>
        <button onClick={()=> setSelected("Delhi")}>A) Delhi</button>
        <button onClick={()=> setSelected("Mumbai")}>B) Mumbai</button>
        <button onClick={()=> setSelected("Kolkata")}>C) Kolkata</button>
      </div>
    <h2>{msg()}</h2>
    </div>
  )
}

export default App