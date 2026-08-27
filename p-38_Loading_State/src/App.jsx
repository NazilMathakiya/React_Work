import React, { useEffect, useState } from "react";

function App(){
  const [users,setUsers]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data)=> {
      setUsers(data);
      setLoading(false);
    });
  },[]);

  return(
    <div>
      <h1>Loading State</h1>

      {loading ? (
        <h2>Loading...</h2>
      ):(
        users.map((user)=>(
          <p key={user.id}>{user.name}</p>
        ))
      )}
    </div>
  )
}

export default App;