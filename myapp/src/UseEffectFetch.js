import { useEffect,useState } from "react";
function UseEffectFetch(){
    const [content,setContent] = useState([]);
    useEffect(() => {
        //api call 
        fetch(`https://jsonplaceholder.typicode.com/users`) // url 
        .then(response => response.json())  // resolved or rejected
        .then(response => setContent(response));
    },[])
    return (
        <>
          Api Call 
          {
             content.map((item) => 
             <li key={item.id}> {item.name} </li>)

          }
        </>
    )
}
export default UseEffectFetch;