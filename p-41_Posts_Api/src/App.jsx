// Using Fetch():-

// import React, { useEffect, useState } from "react";

// function App(){
//   const[posts,setPosts]=useState([]);

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>response.json())
//     .then((data)=>{
//       setPosts(data);
//     });
//   },[]);

//   return(
//     <div>
//       <h1>Posts</h1>

//       {posts.map((post)=>(
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App;


// Using Axios():-

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;