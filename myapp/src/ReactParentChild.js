import React, { useState } from 'react'

export default function ReactParentChild() {
    const [counter,setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);
  return (
    <>
      <Increment functionIncrement={incrementCounter}/> <br/>
      <Counter count={counter}/> <br/>
      <Decrement onClickFunction={decrementCounter}/> <br/> 
    </>
  )
}
function Increment(props){
   return <button onClick={props.functionIncrement}> Increment </button>
}
function Decrement(props){
    return <button onClick={props.onClickFunction}> Decrement </button>
}
function Counter(props){
    return <p> {props.count} </p>
}