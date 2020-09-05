// let is scoped variable
let x=20;
if(x==20){
    let x=30;
    console.log(x);
}
console.log(x);

// var is global variable
var a=10
console.log(a);

// another example of globality of var
// wrong method to do this :)
// The reason is that after five iterations, the value of the  i variable is 5. And the five instances of the callback function passed to the setTimeOut() function refers to the same variable i with the final value 5.
// ?
// for(var i=0;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }
// // correct method to do this
// // IIFE pattern
// for(var i=0;i<=5;i++){
//     (function (j){
//         setTimeout(function(){
//             console.log(j);
//         },1000);
//     })(i);
// }
// // i use arrow functions 
// console.log('entery is here')
// for(let i=0;i<=5;i++){
//     setTimeout(()=> console.log(i),1000);
// }
//redeclartion
//redeclartion in var have no problem
var counter = 0;
var counter;
console.log(counter);
//redeclartion in let show error
let counter2 = 0;
//let counter2;
console.log(counter2);

