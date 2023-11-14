import React, { useState } from 'react';
import './style/App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import cardsData from './data/cardsData.js';

function App() {
  const [count, setCount] = useState(0);

  const now = new Date();
  const date = new Date(now);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let hoursLeft = 24 - hours;
  let minutesLeft = 60 - minutes;
  let secondsLeft = 60 - seconds;

  return (
    <>
      <Navbar />
      <Hero />
      <h3 className="promo"> -25% Time left before the offer ends: {hoursLeft}H : {minutesLeft}m : {secondsLeft}s</h3>

      <div id="cardContainer" className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            starred={card.starred}
            name={card.name}
            description={card.description}
            review={card.review}
            phone={card.phone}
            email={card.email}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
