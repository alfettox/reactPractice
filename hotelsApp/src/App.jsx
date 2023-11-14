import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'

import room1 from './assets/room1.jpg';
import room2 from './assets/room2.jpg';
import room3 from './assets/room3.jpg';
import room4 from './assets/room4.jpg';


function App() {
  const [count, setCount] = useState(0)

  const now = new Date();
  const date = new Date(now);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  let timeLeft

  let hoursLeft = 24 - hours;
  let minutesLeft = 60 - minutes;
  let secondsLeft = 60 - seconds;

  return (
    <>
      <Navbar />
      <Hero />
      <h3> -25% Time left before the offer end: {hoursLeft} : {minutesLeft} : {secondsLeft}</h3>

      <div className="card-container">
        <Card
          image={room1}
          starred='True'
          name="Chalet la nature"
          description="This is a nice space to have a relaxing time. 4 bedrooms and 2 bathrooms. Full furnished"
          phone="+1 (514) 132-1234"
          email="info@lanature.room"
          price="300"
        />
        <Card
          image={room2}
          starred='True'
          name="Chalet la nature"
          description="This is a nice space to have a relaxing time. 4 bedrooms and 2 bathrooms. Full furnished"
          phone="+1 (514) 132-1234"
          email="info@lanature.room"
          price="300"
        />

        <Card
          image={room3}
          starred='False'
          name="La cascade"
          description="2 bedrooms and 1 bathroom. Classy space"
          phone="+1 (514) 132-2334"
          email="info@lacascade.ca"
          price="100"
        />

        <Card
          image={room4}
          starred='False'
          name="Chalet l'exclusif"
          description="Simply minimalist space"
          phone="+1 (514) 123-2324"
          email="info@chaletlexclusif.ca"
          price="300"
        />
      </div>

    </>
  )
}

export default App
