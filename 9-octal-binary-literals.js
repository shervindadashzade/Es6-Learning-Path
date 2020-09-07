// octal prefix = 0
// hexadecimal prefix = 0x
//example
let a = 051;
//output: 41
console.log(a); 
let b = 058; // invalid octal number (8)
//output: 58
console.log(b);
// what is "use strict" in js
// this command beings js compiler to strict mode that is secure and you cannot use a variable without declare it x=10; cause error var x=10; is correct 
// strict mode comes to js from es5
// binary numbers => havent default function you can use parseInt function example below:
let c = parseInt('111',2);
console.log(c);