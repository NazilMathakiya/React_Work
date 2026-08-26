import React, { useEffect, useState } from "react";

function App(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((data)=>{
            setUsers(data);
        });
    },[]);

    return(
        <div>
            <h1>Fetch Users</h1>
            {users.map((user)=>(
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default App;