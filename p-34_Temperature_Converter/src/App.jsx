import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit =
    celsius === "" ? "" : (Number(celsius) * 9) / 5 + 32;

  return (
    <div>
      <h1>Temperature Converter</h1>

      <input
        type="number"
        placeholder="Enter Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      {celsius !== "" && (
        <h2>
          {celsius}C = {fahrenheit}F
        </h2>
      )}
    </div>
  );
}

export default App;