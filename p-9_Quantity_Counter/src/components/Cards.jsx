import React from "react";
import { useState } from "react";

function Cards(props){
    const [quantity,setquantity]=useState(0);
    const incr=()=>{
        setquantity(quantity+1);
    }
    const decr=()=>{
        if(quantity>0){
            setquantity(quantity-1);
        }
    }
    
    return(
        <div>
            <h2>Product Name: {props.name}</h2>
            <h2>Price: {props.price}</h2>
            <button onClick={decr}>-</button>{quantity}<button onClick={incr}>+</button>
            <h2>Total: ₹{props.price*quantity}</h2>
        </div>
    )
}

export default Cards;