function taskOne(){
  console.log("task One");
}
function taskTwo(){
    console.log("task Two");
}
function taskThree(){
    console.log("task Three");
}
// taskOne();
// taskTwo();
// taskThree();

// setTimeout(taskOne,2000);
// taskTwo();

function serverRequest(query,getResults){
    setTimeout(function(){
      let response = query + " full"; //exceptiom run time error
      getResults(response);  // calling function 
    },2000);
}
let query="some";
console.log(query);
function getResults(response){
    console.log("response from server "+response);
}
console.log("before callback event");
serverRequest("The glass is half ",getResults); // passing the reference serverRequest is higher order function 
console.log("after call back event");
console.log("after call back event1");
console.log("after call back event2");
console.log("after call back event3");

//getResults("");