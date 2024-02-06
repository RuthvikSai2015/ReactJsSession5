import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Loading from './Loading';
import EventHandlingExample from './EventHandlingExample';
import NumbersList  from './NumbersList';
import ReactLists from './ReactLists';

function App() {
  return (
    <div className="App" >
      {/* <Welcome/> */}
      {/* <Greeting name="react js" time="9 PM" age={32} isAdmin={true} array = {[0,1,2,3]} obj = {{name:"savitha",age:28}} showNav/>
      <Greeting name="react js" time="9 PM" /> */}
      {/* <Greeting isLoggedIn={false}/>
      <Loading isLoading={false}/>
      <EventHandlingExample/> */}
      <NumbersList numbers={[1,2,3,4,5]}/>
      <ReactLists/>
      {/* <Greeting name="Bootstrap" /> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
