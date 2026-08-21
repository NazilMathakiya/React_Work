import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>{isDark ? "Dark Theme 🌙" : "Light Theme ☀️"}</h1>

      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default App;