import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (username === "user" && password === "user123") {
      localStorage.setItem("token", "my-login-token");

      setMessage("Login successful!");

      navigate("/home");
    } else {
      setMessage("Invalid username or password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>MyStore Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>{message}</p>

        <div className="demo-login">
          <p>Demo Login:</p>
          <p>Username: user</p>
          <p>Password: user123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;