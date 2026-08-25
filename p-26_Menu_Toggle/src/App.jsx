import React from 'react'
import { useState } from 'react'

function App() {
  const [menu,setMenu]=useState(false);
  function handle(){
      setMenu(!menu);
  }
  
  return (
    <div>
      <h1>Menu Toggle</h1>
      <button onClick={handle}>Menu</button>
      {menu && (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
        </ul>
      )}
    </div>
  )
}

export default App