import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const pageStyle = {
    textAlign: "center",
    padding: "30px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 220px)",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
  };

  return (
    <>
      <Navbar />

      <div style={pageStyle}>
        <h1>Products</h1>

        <div style={gridStyle}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;