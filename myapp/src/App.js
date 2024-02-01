import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
          <Welcome/> 
          <Welcome></Welcome>
          <Welcome/> 
          <Welcome/> 
          <Welcome/> 
          <Welcome/> 
            React JS Evening Batch Sessions
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React JS Components
        </a>
      </header>
    </div>
  );
}

export default App;
