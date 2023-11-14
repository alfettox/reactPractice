import { useState } from 'react'
import './App.css'
import React from 'react'
import Count from './components/Count.jsx'

function App() {
  const [count, setCount] = useState(0)

  function plus(){
    setCount(count => count +1)
    console.log(count)
  }

  function minus(){
    setCount(count => count -1)
    console.log(count)
  }

  return (
    <>
      <div className="counter">
          <button className="counter--minus" onClick={minus}>+</button>
          <button className="counter--plus" onClick={plus}>-</button>
          <Count number={count} />          {/* Pass the count as prop */}
      </div>
    </>
  )
}

export default App
