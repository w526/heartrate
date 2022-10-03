import { useState } from 'react';
import './App.css';

function App() {

  const [age, setAge] = useState(0)
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)

function calculate(e){
  e.preventDefault()
  const lower = (220 - age) * 0.65
  const upper = (220 - age) * 0.85
  setLower(lower)
  setUpper(upper)
}


  return (
    <div>
      <h1>Heart rate limits calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Age: </label>
          <input value={age} onChange={e => setAge(e.target.value)}></input>
        </div>
        <div>
           <label>Heart rate limits:</label>
           <output> {lower} - {upper}</output>
         </div>
         <div>
           <button>Calculate</button>
         </div>
      </form>
    </div>
  );
}

export default App;
