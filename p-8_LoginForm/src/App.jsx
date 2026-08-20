import {useState} from "react";

function Form(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLogin,setIsLogin]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsLogin(true)
  }

  return(
    <div>
      <h1>Form:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Your Email"/>

          <label>Password:</label>
          <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Your Password"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isLogin && <p>Form Submitted Successfully : {email}</p>}
    </div>
  )
}

export default Form;