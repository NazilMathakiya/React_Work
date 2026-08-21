import { useState } from "react";

function Greet() {
  const [name, setName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Please Enter Your Name :)");
      setIsSubmit(false);
    } else {
      setError("");
      setIsSubmit(true);
    }
  };

  return (
    <div>
      <h1>Greeting App ❤️</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <br />

      {error && <p>{error}</p>}

      {isSubmit && <p>Hello!! How Are You 😊 {name}</p>}
    </div>
  );
}

export default Greet;