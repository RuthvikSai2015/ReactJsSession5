import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Loading from './Loading';
import EventHandlingExample from './EventHandlingExample';
import NumbersList  from './NumbersList';
import ReactLists from './ReactLists';
import ClassComponentLife from './ClassComponentLife';
import ReactUseState from './ReactUseState';
import ReactUseStateForm from './ReactUseStateForm';
import UseEffectExample from './UseEffectExample';
import UseEffectFetch from './UseEffectFetch';
import ErrorHandling, { Footer } from './ErrorHandling';
import ReactChildrenProps from './ReactChildrenProps';
import ReactParentChild from './ReactParentChild';
import ColorCard from './ColorCard';
import ColorContainer from './ColorContainer';
import ReactRouterExample from './ReactRouterExample';
import ReactFormExample from './ReactFormExample';
import FormikYup from './FormikYup';
import ReactContextExample from './ReactContextExample';
import CounterRedux from './CounterRedux';
import SpringBootExample from './SpringBootExample';

function App() {
  return (
    <div className="App" >
      {/* <Welcome/> */}
      {/* <Greeting name="react js" time="9 PM" age={32} isAdmin={true} array = {[0,1,2,3]} obj = {{name:"savitha",age:28}} showNav/>
      <Greeting name="react js" time="9 PM" /> */}
      {/* <Greeting isLoggedIn={false}/>
      <Loading isLoading={false}/>
      <EventHandlingExample/> */}
      {/* <NumbersList numbers={[1,2,3,4,5]}/>
      <ReactLists/> */}
      {/* <ClassComponentLife/> */}
      {/* <ReactUseState/> */}
      {/* <ReactUseStateForm/> */}
      {/* <UseEffectExample/> */}
      {/* <UseEffectFetch/> */}
      {/* <ErrorHandling/> */}
      {/* <ReactChildrenProps>
              <p> This is the children component</p>
              <p> This is the children1 component</p>
              <p> This is the children2 component</p>
        </ReactChildrenProps> */}
        {/* <ReactParentChild/> */}
        {/* <ColorCard title="React" color="green"/>
        <ColorCard title="Js" color="yellow"/>
        <ColorCard title="Html5" color="blue"/> */}
        {/* <ColorContainer/> */}
        {/* <ReactRouterExample/> */}
        {/* <ReactFormExample/> */}
        {/* <FormikYup/> */}
        {/* <ReactContextExample/> */}
        <SpringBootExample/>
        {/* <CounterRedux/> */}
      {/* <Footer/> */}
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
