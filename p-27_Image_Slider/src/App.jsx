import { useState } from "react";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  ];

  const [current, setCurrent] = useState(0);

  function nextImage() {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  function previousImage() {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  return (
    <div>
      <h1>Image Slider</h1>

      <img src={images[current]} alt="Slider" width="500" height="300"/>

      <br />

      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default App;