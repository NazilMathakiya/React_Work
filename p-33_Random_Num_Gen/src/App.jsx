function App() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
    </div>
  );
}

export default App;
