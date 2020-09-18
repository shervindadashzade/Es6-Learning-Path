// arrow functions
let add = (x,y) => x+y;
console.log(add(4,2));
// should add return in curly brackes
let add2 = (x,y) => { return x+y; }
let numbers = [2,6,4];
// arrow functions with many parameter
numbers.sort((a,b)=> b-a);
console.log(numbers);
// arrow functions with just one parameter
let names = ['shervin','mehdi','ali'];
let lengths = names.map(name => name.length);
console.log(lengths);
// throws syntax error
// let multi = (a,b)
// => a*b;
// but this does not throw error
let multi = (a,
    b)=>
    a*b;
//  expressions in the body of an arrow function dont need curly braces
let square = x => x*x;
//  statement in the body of an arrow function need curly braces
let except = msg => {
    throw msg;
};
// return an object in arrow functions
let setColor = color => ({ value:color});
console.log(setColor('Red'));
// anonymous functions make this but arrow function dont
function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            // here we can use this because arrow functions dont decleare this context of function
            () => console.log(this.speed),
            1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;
// arrow function havent prototype property
// arrow functions havent arguments 

// an interesting example
function show() {
    return x => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15