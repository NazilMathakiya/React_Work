import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function add() {
    setResult(Number(num1) + Number(num2));
  }

  function subtract() {
    setResult(Number(num1) - Number(num2));
  }

  function multiply() {
    setResult(Number(num1) * Number(num2));
  }

  function divide() {
    setResult(Number(num1) / Number(num2));
  }

  return (
    <div>
      <h1>Simple Calculator</h1>

      <input type="number" placeholder="Enter first number" value={num1} onChange={(e) => setNum1(e.target.value)}/>

      <br /><br />

      <input type="number" placeholder="Enter first number" value={num2} onChange={(e) => setNum2(e.target.value)}/>

      <br /><br />

      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>×</button>
      <button onClick={divide}>÷</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;