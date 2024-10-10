import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://testapi.sgqjpw2023.workers.dev'); // 替换为你的Worker URL
      const data = await response.json();
      setQuote(data.quote);
    };

    fetchQuote();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {quote}
          hello,world
        </a>
      </header>
    </div>
  );
}

export default App;
