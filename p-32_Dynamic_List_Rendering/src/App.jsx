import React from "react";
import Product from "./components/Product";

function App(){
  const products=["Laptop","Mobile","Keyboard","Mouse"];

  return(
    <div>
      <h1>Dynamic List Rendering</h1>

      {products.map((product)=>(
        <Product name={product}/>
      ))}
    </div>
  )
}

export default App;