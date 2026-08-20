import React from "react";
import { useState } from "react";

function Cards(props){
    const[added,setadded]=useState(false)
    function handleCart(){
        setadded(true)
    }

    return(
        <div>
            <h1>Product Details</h1>
            <div>
                <h2>Product Name: {props.name}</h2>
                <h2>Product Price: {props.price}</h2>
                <button onClick={handleCart}>{added ? `Added ✓` : 'Add to Cart'}</button>
            </div>
        </div>
        
        
    )
}

export default Cards;