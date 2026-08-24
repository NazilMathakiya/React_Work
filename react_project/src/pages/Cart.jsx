import { useContext } from "react";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const pageStyle = {
    textAlign: "center",
    padding: "30px",
  };

  const cartContainerStyle = {
    maxWidth: "700px",
    margin: "30px auto",
  };

  const cartItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    padding: "20px",
    borderBottom: "1px solid #ccc",
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    objectFit: "contain",
  };

  return (
    <>
      <Navbar />

      <div style={pageStyle}>
        <h1>My Cart</h1>

        {cart.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          <>
            <div style={cartContainerStyle}>
              {cart.map((item) => (
                <div
                  style={cartItemStyle}
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={imageStyle}
                  />

                  <div>
                    <h3>{item.title}</h3>

                    <p>
                      Price: ₹{" "}
                      {Math.round(
                        item.price * 85
                      )}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <h2>
              Total: ₹ {Math.round(total * 85)}
            </h2>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;    