//const is like let block-scoped variable but it cants reassigned.
//usually declare const variables with this ALPHABET
const RATE=1.0;
// it couses TypeError
//RATE=2.0;
//when a declare a const its immedialtly should initialize to a value otherwise you get a SyntaxError
//const RATE;
//The const keyword ensures that the variable it creates is read-only, take a look at this
const PERSON = {age:30};
PERSON.age = 20; // its ok
console.log(PERSON);
//but this throws a TypeError
//PERSON = {age:20};
//if you want the value of the person object to be immutable you can do this:
const person = Object.freeze({age: 20});
person.age = 30; // TypeError or nothing changes
//objects you freeze inners objects are not freeze and if you want you should to it yourself see this example:
const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});
company.address.street = 'IRAN' //works perfectly
//consta and arrays
const colors = ['yellow'];
colors.push('red');
console.log(colors);
colors.pop()
colors.pop();
console.log(colors);
//colors = []; // throws TypeError
// of use in es6 loops
let scores = [75, 80, 95];
for (let score of scores) {
    console.log(score);
}
//either you can use const
// because in every for loop it makes a score and because of block-scoped of const its possible and you cant change value of score in for loop
let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}
// but you cant do this because it changes value of const in every iteration
//for (const i = 0; i < scores.length; i++) { // TypeError
//    console.log(scores[i]);
//}