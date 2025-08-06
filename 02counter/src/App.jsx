import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue = () => {
    // counter++ 
    if(counter < 20)  setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    } 
  }

  return (
    <>
      <h1>Chai aurt React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add a Value {counter} </button>
      <br />
      <button
      onClick = {removeValue}
      >remove value</button>
    </>
  )
}

export default App
