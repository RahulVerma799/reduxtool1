import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,reset} from './features/counter/counterSlice'

function App() {

  const count=useSelector((state)=> state.counter.value);
  const dispatch=useDispatch();
  
 
  function handleIncrement(){
      dispatch(increment());
  }

  function handleDecrement(){

    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset());
  }

  return (
  <div className='container'>
    <button onClick={handleIncrement}>+</button>
    <div>count:{count}</div>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>reset</button>

  </div>
  )
}

export default App
