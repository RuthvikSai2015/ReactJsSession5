import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [content,setContent] = useState("");
  useEffect(() => {
    fetch('http://localhost:3001/testAPI')
    .then(res => res.text())
    .then(response => setContent(response));
  },[]);
  return (
    <div className="App">
      {content}
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
