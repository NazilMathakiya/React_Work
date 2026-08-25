import React, { useState } from "react";

function App() {
  const [tab, setTab] = useState("Home");

  return (
    <div>
      <h1>Tab Switching</h1>

      <button onClick={() => setTab("Home")}>
        Home
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setTab("About")}>
        About
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setTab("Contact")}>
        Contact
      </button>

      <hr />

      {tab === "Home" && <h2>Welcome to Home Page</h2>}

      {tab === "About" && <h2>This is About Page</h2>}

      {tab === "Contact" && <h2>Contact us at example@gmail.com</h2>}
    </div>
  );
}

export default App;