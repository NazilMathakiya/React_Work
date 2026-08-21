import { useState } from "react";

function Cards(props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <h1>Product Name: {props.name}</h1>

      <h2>Price: {props.price}</h2>

      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? "Hide Details" : "Show Details"}
      </button>

      {readMore && <p>{props.desc}</p>}
    </div>
  );
}

export default Cards;