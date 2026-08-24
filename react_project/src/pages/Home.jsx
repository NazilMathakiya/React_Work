import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const pageStyle = {
    minHeight: "calc(100vh - 70px)",
    backgroundColor: "#f5f5f5",
    padding: "40px",
  };

  const heroStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 40px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "1px solid #ddd",
  };

  const titleStyle = {
    fontSize: "42px",
    marginBottom: "15px",
    color: "#222",
  };

  const textStyle = {
    fontSize: "19px",
    lineHeight: "1.6",
    maxWidth: "650px",
    margin: "0 auto",
    color: "#555",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "12px 28px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#222",
    color: "white",
    cursor: "pointer",
  };

  const sectionTitleStyle = {
    textAlign: "center",
    fontSize: "30px",
    marginTop: "50px",
    marginBottom: "30px",
  };

  const featuresStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "250px",
    padding: "25px",
    textAlign: "center",
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const cardTitleStyle = {
    fontSize: "22px",
    marginBottom: "12px",
    color: "#222",
  };

  const cardTextStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#555",
  };

  return (
    <>
      <Navbar />

      <div style={pageStyle}>
        <div style={heroStyle}>
          <h1 style={titleStyle}>Welcome to MyStore</h1>

          <p style={textStyle}>
            Discover a variety of products in one simple place.
            Browse products, check their details, and add your
            favorite items to your cart.
          </p>

          <Link to="/products">
            <button style={buttonStyle}>
              Explore Products
            </button>
          </Link>
        </div>

        <h2 style={sectionTitleStyle}>What We Offer</h2>

        <div style={featuresStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Products</h3>

            <p style={cardTextStyle}>
              Browse different products from multiple categories
              using our product API.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Product Details</h3>

            <p style={cardTextStyle}>
              View detailed information including price,
              category, and description.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Easy Cart</h3>

            <p style={cardTextStyle}>
              Add your favorite products to the cart and
              manage them easily.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;