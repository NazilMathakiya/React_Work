import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App(){
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("Count Changed");
  },[count]);
  function incr(){
    setCount(count+1);
  }

  return(
    <div>
      <h1>Counter + UseEffect</h1>
      <h2>Count: {count} &nbsp;<button onClick={incr}>Increase</button></h2>
    </div>
  )
}

export default App;