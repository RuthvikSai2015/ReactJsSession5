function Greeting(props){
  // console.log(props.isLoggedIn);
  // if(props.isLoggedIn){
  //  return <UserGreeting/>
  // }
  //   return <GuestGreeting/>
  return (
    props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
  )
}
function GuestGreeting(){
    return (
        <h1>  Guest Component</h1>
    )
}
function UserGreeting(){
    return (
        <h1> User Component</h1>
    )
}
export default Greeting;