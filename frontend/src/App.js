import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Hello from frontend!');
  }, []);

  return <div>{message}</div>;
}

export default App;
