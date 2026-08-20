import React from "react";
import { useState } from "react";

function Char(){
  const [text,setText]=useState('')
  
  return(
    <div>
      <h1>Character Counter</h1>
      <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="[Write something here...]"/>
        <p>Character:{text.length}</p>
      </div>
    </div>
  );
}

export default Char;