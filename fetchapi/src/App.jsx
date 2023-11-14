import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  console.log("Component rendered")

  useEffect(() => {
    const url = "https://swapi.dev/api/people/1";
    

    fetch(url)
      .then(response => response.json())
      .then(data => setData(JSON.stringify(data, null, 2))) // Use null for the replacer, and 2 for indentation.
      .catch(error => console.error("Error:", error));
      console.log(data)
  }, []);

  return (
    <>
      <pre className="text">{data}</pre>
    </>
  );
}

export default App;
