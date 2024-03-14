import React from 'react'
import './style.css';
import { useState } from 'react';

const Counter = () => {
    const[count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    

  return (
    <>
    <div className='container'>
        <div id='count'>
            <h1>{count}</h1>
        </div>
        <div className='buttons'>
            <button className='inc' onClick={handleIncrement}>+</button>
            <button className="dec"  onClick={handleDecrement}>-</button>
        </div>
    </div>
   
   </>
  )
}

export default Counter;