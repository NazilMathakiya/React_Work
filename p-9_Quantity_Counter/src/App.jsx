import React from "react";
import Cards from "./components/Cards";
function App(){
  return(
    <div>
      <h1>Product's Quantity Counter</h1>
      <div>
        <Cards name="Table" price="500"/>
        <Cards name="Chair" price="250"/>
      </div>
    </div>
  )
}

export default App;