import { useEffect,useState } from "react";
function UseEffectFetch(){
    const [content,setContent] = useState([]);
    // useEffect(() => {
    //     //api call 
    //     fetch(`https://jsonplaceholder.typicode.com/users`) // url 
    //     .then(response => response.json())  // resolved or rejected
    //     .then(response => setContent(response));
    // },[])
    const [contentType,setContentType] = useState('');
   useEffect(() =>{
         console.log(`content type-------${contentType}`);
         fetch(`https://jsonplaceholder.typicode.com/${contentType}`) // url 
        .then(response => response.json())  // resolved or rejected
        .then(response => setContent(response));
    },[contentType])
    return (
        <>
        { contentType }
        {
             content.map((item) => 
             <li key={item.id}> {item.id} </li>)

          }
          <button onClick={() => setContentType('posts')}> Posts </button><br/><br/>
          <button  onClick={() => setContentType('users')}> Users </button><br/><br/>
          <button  onClick={() => setContentType('todos')}> Todos </button>
        </>
    )
}
export default UseEffectFetch;