import { useState } from "react";

function Like(){
  const [count,setCount]=useState(0);
  const incr=()=>{
    setCount(count+1)
  } 
  return(
    <div>
      <h1>❤️ {count} Likes</h1>
      <button onClick={incr}>Click Here</button>
    </div>
  )
}

export default Like;