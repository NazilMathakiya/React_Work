import React, { useState } from "react";

function App() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20"
  ];

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = items.slice(start, end);

  function nextPage() {
    if (page < 4) {
      setPage(page + 1);
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div>
      <h1>Pagination</h1>

      {currentItems.map((item) => (
        <p>{item}</p>
      ))}

      <button onClick={previousPage}>Previous</button>

      <span> Page {page} </span>

      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default App;