
import React, { useState } from 'react'
import Button from './Button';
import './Counter.css';


const Counter = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);


  function randomNumber(min, max) {

    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    let next = random;
    let prevNumber = count1;
    const nextNumber = random > 0 || random < 500 ? next + prevNumber : next - prevNumber;

    return (
      console.log(`prev value : ${prevNumber}`),

      console.log(`current value : ${random}`),

      console.log(`next value : ${nextNumber}`),

      // random,

      nextNumber
    );
  }



  const handleClick = () => {
    setCount1(randomNumber(-100, 100));
    setCount2(randomNumber(-100, 100));
    setCount3(randomNumber(-100, 100));
  };



  return (
    <>
      <div className='container'>
        <div className='mainDiv'>
          <div className='inner'>
            <div className='headingDiv'>
              <h1 className="shimmer">Increment/Decrement Random Number</h1>
            </div>
          </div>

          <div className='labelDiv shadow' id="background1">
            <h1 className='label'>{count1}</h1>
          </div>

          <div className='labelDiv shadow' id="background2">
            <h1>{count2}</h1>
          </div>

          <div className='labelDiv shadow' id="background3">
            <h1>{count3}</h1>
          </div>
        </div>

        <div className='buttonDiv'>
          <Button onClick={handleClick} />
        </div>
      </div>
    </>
  )
}

export default Counter;


