import { useState } from "react";

function Toggle(){
  const [show,setShow]=useState(false);
  const Showtoggle= ()=>{setShow(!show)};
  return(
     <div>
        <button onClick={Showtoggle}>Hide/Show</button>
        {show && <p>Hello from CodingGita</p>}
    </div>
  )
}


export default Toggle;   