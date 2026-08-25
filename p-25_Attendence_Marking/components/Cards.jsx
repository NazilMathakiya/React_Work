import { useState } from "react";

function Cards(props) {
  const [present, setPresent] = useState(true);

  function attendance() {
    setPresent(!present);
  }

  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <h2>Roll No: {props.roll_no}</h2>

      <button onClick={attendance}>
        {present ? "Present" : "Absent"}
      </button>
    </div>
  );
}

export default Cards;