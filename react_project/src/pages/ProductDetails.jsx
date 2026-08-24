import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const pageStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "40px",
  };

  const imageStyle = {
    width: "180px",
    height: "220px",
    objectFit: "contain",
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div style={pageStyle}>
        <img
          src={product.image}
          alt={product.title}
          style={imageStyle}
        />

        <div>
          <h1>{product.title}</h1>

          <h2>₹ {Math.round(product.price * 85)}</h2>

          <p>{product.description}</p>

          <p>
            <b>Category:</b> {product.category}
          </p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;