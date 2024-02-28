import React, { useEffect } from 'react'

export default function SpringBootExample() {
 useEffect(()=> {
    fetch('http://localhost:8080/hello?name=react')
    .then(res => res.text())
    .then(res => console.log(res));
 },[])
  return (
    <div>
      <h1> React Spring boot</h1>
    </div>
  )
}
