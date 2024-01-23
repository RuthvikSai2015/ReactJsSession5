

// // var {name,age="32",id,mobileNumber="987654321"} = user;
// // //var name1 = user.name1;
// // console.log(name);
// // console.log(age);
// // var mobileNumber = user.mobileNumber === undefined ? "987654321": user.mobileNumber;
// // console.log(mobileNumber);
// // // user.name // 100 times 
// const name = "kumar";

// const {name:firstName} = user; // const firstName = user.name;

// console.log(firstName);

// // console.log(user);
// //nested object 
// const {address} = user;

// console.log(address);

// console.log(user.return); 

let user = {
    name : "rakesh",
    mobileNumber : "6324678910",
    age:34,
    id: 123	,
    address : {
        doorNo : 5,
        city : {
            cityName : "Hyderabad",
            state : "Telangana",
            country : "India"
        } 
    },
    return : false 
}

// const {return} = user; // const return = user.return ;

const {address : {city,doorNo}} = user; // const adress = user.address const city = user.address.city

// console.log(city.state, doorNo); 

const {cityName,state,country} = city;

console.log(cityName);

// let [firstName , lastName , middleName] = arr ;

// console.log(firstName);
// console.log(lastName);
// console.log(middleName);

let arr = ["kumar","shree","123","456","789"];

// rest operator ...

let [firstName , lastName , ...x] = arr;

console.log(x);

const {name,...otherProps} = user;

console.log(otherProps);


// Swap variables in javascript 

// a = 10 , b = 20 
// a = 20 , b = 10 

let a = 10 , b = 20 ;

console.log(a,b);

[ a , b] = [b , a]; // a = b , b = a

console.log(a,b);







