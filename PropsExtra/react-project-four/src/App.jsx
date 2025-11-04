
import './App.css'
import Card from './components/Card';
import Button from './components/Button'
import React, { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1);
  }

  return (
      <div>
        <Button handleClick={handleClick} text="Click me">
          <h1>{count}</h1>
        </Button>



        {/* <Card name="Aditya Prabhulkar">
          <h1>Best Web course</h1>
          <p>Trying to be consistent in this</p>
          <p>Will complete the course soon</p>
        </Card>
        <Card children ='I am children'>
          Hello jee kese ho sare
        </Card> */}
      </div>
  )
}

export default App
