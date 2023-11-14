import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Listbox />
    </>
  )
}

export default App
