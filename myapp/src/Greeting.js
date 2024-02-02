function Greeting(props) {
    console.log("props---- " + props.name);
    return (
        <>        
            <h2> Hello {props.name}</h2>
            <h2> {props.time}</h2>
            <h2> {props.age + 10 }</h2>
            <h2> {props.array} </h2>
            <h2> {props.obj.name} </h2>
            <h2> Admin : {String(props.isAdmin)} </h2>
            <h2> Show Nav : {props.showNav} </h2>
        </>

    )
}
export default Greeting;

//Greeting("reactjs");