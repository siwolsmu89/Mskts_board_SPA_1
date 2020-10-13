import React, { useEffect, useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/home')
    .then(response => response.text())
    .then(message => {
    setMessage(message);
    });
    },[])
    
    return (
      <div className="App">
        <HelloWorld/>
        <h1>{message}</h1>
      </div>
    );
  
}

export default App;
