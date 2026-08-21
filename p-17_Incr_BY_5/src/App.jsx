import React, { useState } from 'react'

function App() {
  const [count,setcount]=useState(0);
  const incr=()=>{
    setcount(count+5);
  }
  const decr=()=>{
    if(count>0){
    setcount(count-5);}
  }
  
  return (
    <div className=''>
      <button onClick={incr}>+5</button>
      <button onClick={decr}>-5</button>
      <h2>{count}</h2>
    </div>
  )
}

export default App