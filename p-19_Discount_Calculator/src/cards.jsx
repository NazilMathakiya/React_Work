function Cards(props) {
  const total =
    props.price - (props.price * props.discount) / 100;

  return (
    <div>
      <h1>Discount Calculator</h1>

      <p>Price: ₹{props.price}</p>

      <p>Discount: {props.discount}%</p>

      <p>
        <b>Final Price: ₹{total}</b>
      </p>
    </div>
  );
}

export default Cards;