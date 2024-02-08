import { useState } from 'react';
function ReactUseState() {
    //    const arrayRef = useState(0); // [variable,setVariable];
    //    const variable = arrayRef[0];
    //    const setVariableValue = arrayRef[1];
    // const [variable, setVariable] = useState("savitha"); // [v,s] = [0,f()] 

    // console.log(variable);

    const [count,setCount] = useState(0); //undefined 
    const handleButtonEvent = () => {

    }
    return (
        <>
        <button onClick={handleButtonEvent} > Counter Increment </button>
         <p> {count} </p>
        </>
    )
  


}
export default ReactUseState