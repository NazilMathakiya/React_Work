import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    textAlign: "center",
    borderRadius: "5px",
    backgroundColor: "white",
  };

  const imageStyle = {
    width: "100px",
    height: "120px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
  };

  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={imageStyle}
      />

      <h3
        style={{
          fontSize: "16px",
          height: "50px",
          overflow: "hidden",
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        ₹ {Math.round(product.price * 85)}
      </p>

      <Link to={`/products/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;