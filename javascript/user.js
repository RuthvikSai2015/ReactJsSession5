let user = { name : 'rakesh' , age : 32}

function printName(user){
    console.log(`User name is ${user?.name}`);
}
function printAge(user){
    console.log(`User age is ${user?.age}`);
}
export default user;
export {printAge,printName};