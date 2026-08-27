import React, { useState, useEffect } from "react";

function App(){
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      if(!response.ok){
        throw new Error("API request failed");
      }
      return response.json();
    })
    .then((data)=>{
      setUsers(data);
      setLoading(false);
    })
    .catch(()=>{
      setError(true);
      setLoading(false);
    })
  },[]);
  
  if(loading){
    return <h2>Loading...</h2>
  }

  if(error){
    return <h2>Something went wrong</h2>
  }

  return(
    <div>
      <h1>Users</h1>
      
      {users.map((user)=>(
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default App;