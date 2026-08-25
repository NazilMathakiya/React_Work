import React from "react";
import { useState } from "react";

function App(){
  const [value,setvalue]=useState("");
  const msg=()=>{
    if(value===1){
      return `Selected Rating ★ ${value} Star`;
    }
    if(value===2){
      return `Selected Rating ★ ★ ${value} Star`;
    }
    if(value===3){
      return `Selected Rating ★ ★ ★ ${value} Star`;
    }
    if(value===4){
      return `Selected Rating ★ ★ ★ ★ ${value} Star`;
    }
    if(value===5){
      return `Selected Rating ★ ★ ★ ★ ★ ${value} Star`;
    }
  }
  function Reset(){
    setvalue("");
  }

  return(
    <div>
      <h1>Rating Button</h1>
      <button onClick={()=>setvalue(1)}>★</button>
      <button onClick={()=>setvalue(2)}>★</button> 
      <button onClick={()=>setvalue(3)}>★</button> 
      <button onClick={()=>setvalue(4)}>★</button> 
      <button onClick={()=>setvalue(5)}>★</button>
      <h2>{msg()}</h2>
      
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App;