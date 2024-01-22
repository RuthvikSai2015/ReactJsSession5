// function hoistingExample(){
//   console.log(a);
//   const a = 10;
// }

// hoistingExample();

function scopeExample(){
    let i;
    for(i=0;i<10;i++){
        //
    }
    console.log(i);
}
//console.log(i); 
scopeExample();

let  a = 100;
 a = 150;
console.log(a);

const fruits = ["Apple","Banana","Plum"];

fruits[3]="guava";

console.log(fruits);

// let b = 10;
//     b = 20;
// let b = 30;