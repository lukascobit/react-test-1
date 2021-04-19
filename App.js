import React, {useState} from 'react';
import Tweet from './Tweet';  

function App(){

  const [isRed, setRed] = useState(false);
  var [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
    setRed(true)
  }
  
  return(
    <div className="app">
        <h1 className={isRed ? "red" : "" }>Change my color!</h1>
       <button onClick={increment}>increment</button>
       <h1>{count}</h1>
    </div>
  )
}

export default App;