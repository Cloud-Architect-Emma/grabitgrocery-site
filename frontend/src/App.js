import React, { useState, useEffect } from 'react';
import logo from './logo.svg'; // adjust path if needed
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://host.docker.internal:8080/')  // your backend API URL
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          API says: {message}
        </p>
      </header>
    </div>
  );
}

export default App;
