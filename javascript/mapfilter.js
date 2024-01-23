const numbers = [1, 2, 3, 4]; // 2,4,6,8

// const doubleNumbers = numbers.map(function(ele,index){
//     //logic
//     //console.log(index +"   "+ele);
//     return ele*2;
// });

function double(ele) {
    return ele * 2;
}
const doubleNumbers = numbers.map(element => element * 2);
// console.log(doubleNumbers);

let user = [{ name: "Akash", age: 28, salary: 300 }, 
            { name: "Kumar", age: 32, salary: 400 }, 
            { name: "Rakesh", age: 36, salary: 600 }]


let updateUsers = user.map((item) =>{
    item.salary = item.salary+100;
    return item
}); // return item.salary;

console.log(updateUsers);

//filter the data on some condition

var  evenNumbers = numbers.filter(function(element) {
    return element % 2 == 0;
})
var evenNumbers = numbers.filter(element => element % 2 == 0);
console.log(evenNumbers);

let filterAgeSalary = user.filter((item) =>{
     if(item.age >= 32){
        item.salary = item.salary+100;
        return item;
     }
});
console.log(filterAgeSalary);