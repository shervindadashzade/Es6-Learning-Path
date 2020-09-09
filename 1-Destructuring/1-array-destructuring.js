function getScores(){
    return [10,15,20,30,50];
}
// before es6 we use this method :
let scores = getScores();
let x = scores[0];
let y = scores[1];
let z = scores[2];
console.log(x);
console.log(y);
console.log(z);
// but in es6 we can do this
[x,y,z] = getScores();
console.log(x);
console.log(y);
console.log(z);
// rest syntax
[x,y,z,...args] = getScores();
console.log(args);
// set default value 
// before es6
function getItems(){
    return [10,40];
}
let items = getItems();
let c = items[2] !== undefined ? items[2] : 0;
console.log(c);
// in es6 we do this
[,,c = 0] = getItems();
console.log(c);
// below example throws an error because when an function or anything doesnt return an array and you have excepeted an array 
// js compiler throws an error
// function getItems() {
//     return null;
// }
// [x = 1, y function getItems() {
//     return null;
// }

// [x = 1, y = 2] = getItems();= 2] = getItems();
// to fix this:
function getItems2() {
    return null;
}

let [a = 10, b = 20] = getItems2() || [];

console.log(a); // 10
console.log(b); // 20
// nested array destructuring
function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ];
}
let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();

console.log(color1, color2, color3);
// variable swapping
a = 10, b=20;
[a,b] = [b,a];
console.log(a);
console.log(b);
// a function that return multiple values
function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}
let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference);