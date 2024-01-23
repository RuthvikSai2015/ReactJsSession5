let user = {};

console.log(user.address); //undefined

console.log(user?.address?.city); //undefined.undefined will be an error

// user.address && user.address.city && user.address.city.name

// console.log(user?.address);

let sum = function(a,b){

    return a + b ;
}

let addition = () => {
    return a+b;
} 

let double = function(n){
    return n*2;
}

// var doubleArrow = (n) =>{
//     return n*2;
// }

var doubleArrow = n => n*2; // return n*2

console.log(doubleArrow(2));
