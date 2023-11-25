import React, { useState, useEffect } from 'react';
import { API_KEY } from './config.env';
import './box.css';

const rows = 5;
const columns = 5;

const fetchCatImages = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${rows * columns}`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    const data = await response.json();
    const imageUrls = data.map((cat) => cat.url);

    console.log('Cat Image URLs:', imageUrls);
    return imageUrls;
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return null;
  }
};

const generateBoxes = async () => {
  const imageUrls = await fetchCatImages();
  if (!imageUrls) {
    return [];
  }

  const boxes = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const id = `${i}${j}`;
      const on = Math.random() < 0.5;
      const imageUrlIndex = i * columns + j;
      const imageUrl = imageUrls[imageUrlIndex];
      boxes.push({ id, on, imageUrl });
    }
  }

  return boxes;
};

const BoxComponent = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const generatedBoxes = await generateBoxes();
      setBoxes(generatedBoxes);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {boxes.map((box) => (
        <div key={box.id} className={`box ${box.on ? 'on' : 'off'}`} style={{ backgroundImage: `url(${box.imageUrl})` }}>
          <p>ID: {box.id}</p>
          <p>On: {box.on.toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxComponent;
