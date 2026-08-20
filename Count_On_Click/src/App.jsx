import {useState} from "react";

function Counter(){

  const [count,setCount]=useState(0);
  const incr=()=>{
    setCount(count+1);
  }
  const decr=()=>{
    setCount(count-1);
  }
  const reset=()=>{
    setCount(0);
  }

  return(
    <div className="bg-zinc-700-50">
      <div>
        <h2>Count: {count}</h2>
      </div>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;