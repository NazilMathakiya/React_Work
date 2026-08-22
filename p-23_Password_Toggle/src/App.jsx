import React from 'react'
import { useState } from 'react'

function App() {
  const [pass,setPass]=useState("");
  const [show,setShow]=useState(true);
  function Toggle(){
    setShow(!show);
  }

  return (
    <div>
      <h1>Password Toggle</h1>
      <label>Password: </label>
      <input type={show ? "text" : "password"} value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Enter Password Here'/>
      <button onClick={Toggle}>{show ? "Hide":"Show"}</button>
    </div>
  );
}

export default App