import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState(["Bananas ", "Mangoes ", "Potatoes "]);

  function addItem() {
    setArray(prevArray => [...prevArray, `Item ${prevArray.length + 1}`]);
  }

  var arrayElement = array.map((t, index) => (
    <p key={index} className="array-item"
       style={{ transform: `translateX(${15 * (index + 0)}px)` }}>
      {t}
    </p>
  ));

  return (
    <div className="App">
      <button onClick={addItem}>ADD</button>
      <br />
      {arrayElement}
    </div>
  );
}

export default App;
