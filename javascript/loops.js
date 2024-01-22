// print No 1 to 100

// index/start , end , increment/decrement
let i=0;
while(i<3){
//   console.log(i);
  i++;
}

// 0 ,1 ,2     0<3  0 +1  
//             1<3  1 +1  
//             2<3  2 +1
//             3<3 

// for(let j=0;j<3;j++){
//     console.log(j);
// }

let obj = {
    name : "kumar",
    id : 123,
    age :32,
    isAdmin : true
}

// for(let property in obj){ //for(let i=0;i<obj.length;i++)
//     console.log(property +"    "+ obj[property]);
// }

let fruits = ["Apple","Banana","Plum"];


console.time("forloop");
for(let fruit of fruits){
  console.log(fruit);
}
console.timeEnd("forloop");

