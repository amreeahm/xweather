import { useState } from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState("");
  const [inputVal, setInputVal] = useState("")

  const searchCity = () => {
    setCity(inputVal);
    setInputVal("")
  };

  return (
    <div style={{backgroundColor:"azure", margin:"0",padding:"0",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <div className='App'>
        <input type='text' placeholder='Enter city name' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button onClick={searchCity}>Search</button>

      </div>
      <Weather city={city} />
    </div>
  );
}

export default App;
