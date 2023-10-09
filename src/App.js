import React, { useState } from 'react'

import './App.css';
function App() {
  const [count, setcount] = useState(0);
  const handleEvent=(event)=>{
    console.log(event.target.innerHTML)
    if(event.target.innerHTML.trim() === 'Increment'){
      setcount(count + 1);
    }
    if(event.target.innerHTML.trim() === 'Decrement' && count >0){
      setcount(count - 1)
    }
    if(event.target.innerHTML.trim() === 'Reset Counter'){
      setcount(0);
    }

  }
  return (
    <>
      <div>
        <h1 className="title">Counter-app</h1>
        <h2>{ count }</h2>
        <div>
        <button onClick={(e)=>{
          handleEvent(e)
        }}> Increment </button>
        <button onClick={(e)=>{
            handleEvent(e)
          
        }}> Decrement </button>
        <button onClick={ (e)=>{
        handleEvent(e)
       }}> Reset Counter </button></div>
      </div>
    </>
  )
}

export default App;
