import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const navbarStyle = {
    backgroundColor: "#222",
    color: "white",
    height: "70px",
    display: "flex",
    alignItems: "center",
    padding: "0 40px",
    position: "relative",
  };

  const logoStyle = {
    margin: 0,
    position: "absolute",
    left: "40px",
  };

  const linksStyle = {
    display: "flex",
    gap: "40px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
  };

  const logoutStyle = {
    marginLeft: "auto",
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <h2 style={logoStyle}>MyStore</h2>

      <div style={linksStyle}>
        <Link style={linkStyle} to="/home">
          Home
        </Link>

        <Link style={linkStyle} to="/products">
          Products
        </Link>

        <Link style={linkStyle} to="/cart">
          Cart
        </Link>

        <Link style={linkStyle} to="/contact">
          Contact
        </Link>
      </div>

      <button style={logoutStyle} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;