import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("Please fill all fields!");
      setIsLogin(false);
    } else {
      setError("");
      setIsLogin(true);
    }
  };

  return (
    <div>
      <h1>Form:</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />

          <br /><br />

          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />

          <br /><br />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}

      {isLogin && (
        <p>
          Form Submitted Successfully! Welcome, {name}
        </p>
      )}
    </div>
  );
}

export default Form;