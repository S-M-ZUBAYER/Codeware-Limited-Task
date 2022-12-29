import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [age, setAge] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/ages')
      .then(res => res.json())
      .then(data => {
        setAge(data);
      });

  }, [])
  const ageKey = age[0]?.data;
  const ageKeyString = ageKey + '';
  const ageKeys = ageKeyString.split(',')


  return (
    <div className="App">
      {
        console.log(ageKeys)
      }

    </div>
  );
}

export default App;
