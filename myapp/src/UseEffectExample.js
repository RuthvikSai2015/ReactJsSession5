import { useEffect, useState } from 'react'
import React from 'react'

export default function UseEffectExample() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("initial use effect console");
    },[]);
    useEffect(() => {
       // setCount(count + 1);
        console.log("update use effect console");
    },[count]);
    // useEffect(() => {
    //     const socket = socketIOClient("server");
    //       socket.on(" ",data =>{
    //         //setResponse 
    //       }
    //     );
    //     return() => WebSocket.disconnect();
    // },[]);
    return (
        <>
           <p> {count} </p>
           <button onClick = {() => setCount(count+1)} > Click Me !</button>
        </>
    )
}
