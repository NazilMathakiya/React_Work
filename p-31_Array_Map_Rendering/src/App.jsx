import React from "react";

function App(){
  const items=["Apple","Banana","Orange","Mango"];

  return(
    <div>
      <h1>Array Map Rendering</h1>

      {items.map((fruit)=>(
        <p>{fruit}</p>
      ))}
    </div>
  );
}

export default App;