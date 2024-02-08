import React from 'react'
import {useState} from 'react';

export default function ReactUseStateForm() {
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    const [formState,setFormState] = useState({
        email : "",
        password : ""
    })
    const handleInputFields = (event) => {
       console.log(event.target.name);
       setFormState({
           ...formState, // just wait i need to retain the old value then you can add value 
          [event.target.name] : event.target.value
       })
       console.log("form state -- ",formState);
    }
  return (
    <>
      <form>
        Email : <input type="email" name="email" onChange={handleInputFields}></input><br/>
        Password : <input type="password" name="password" onChange={handleInputFields}></input><br/>
        <button > Submit</button>

      </form>
    </>
  )
}
