import React, { useState } from "react";

function App(){
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [city,setCity]=useState("");
  const [course,setCourse]=useState("");
  const [isLogin,setIsLogin]=useState(false);
const handleSubmit=(e)=>{
  e.preventDefault();
  setIsLogin(true);
}

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name:"/>
          <br />
          <label>Age: </label>
          <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age:"/>
          <br />
          <label>City: </label>
          <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City:"/>
          <br />
          <label>Course: </label>
          <input type="text" value={course} onChange={(e)=>setCourse(e.target.value)} placeholder="Course:"/>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
        {
          isLogin && 
          <p>
          Form Submitted Successfully <br />
          Name: {name}<br />
          Age: {age}<br />
          City: {city}<br />
          Course: {course}
          </p>
        }
      
    </div>
  )
}

export default App;