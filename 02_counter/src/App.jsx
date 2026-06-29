import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
//let counter = 15

const addValue = () => {
  
  setCounter(prev =>{
    if(prev ===20){
      return prev;
    }
    return prev + 1;
  })
  // if(counter===20){
  //   return
  // }
  // setCounter(counter+1)

  console.log('clicked', Math.random())
}

const removeValue = () => {
  setCounter(prev =>{
    if(prev ===0){
      return prev
    }
    return prev-1;
  })
}
  return (
    <>
      <h1>react project 2</h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
