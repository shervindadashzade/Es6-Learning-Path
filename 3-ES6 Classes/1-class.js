// classes prior to es6
// function Animal(type){
//     this.type = type;
// }
// Animal.prototype.identify = function(){
//     console.log(this.type);
// }
// var cat = new Animal('cat');
// cat.identify();
// es6 introduced new syntax for creating class
// codes inside the class executes in strict mode
// class declarations are not hoisted like function declarations
// class Animal{
//     constructor(type){
//         this.type = type;
//     }
//     indentify(){
//         console.log(this.type);
//     }
// }
// // you should use new in class but you can not use in functions mode above commented line
// let cat = new Animal('cat');
// cat.indentify();
// console.log(typeof cat);
//class expression
let Animal = class {
    constructor(type) {
        this.type = type;
    }
    identify() {
        console.log(this.type);
    }
}

let duck = new Animal('Duck');

console.log(duck instanceof Animal); // true
console.log(duck instanceof Object); // true

console.log(typeof Animal); // function
console.log(typeof Animal.prototype); // function
//JavaScript class is a first-class citizen. It means that you can pass a class into a function, return it from a function, and assign it to a variable.
function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() {
        console.log('Hi');
    }
});

greeting.sayHi(); // 'Hi'

// singleton : You can use the class expression to create singleton by calling the class constructor immediately
// new keyword is important
var app = new class {
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(`App ${this.name} is starting ...`);
    }
}('Awesome App');
app.start();
// geters and seters using get and set keyword
let name = 'fullName';
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get[name]() {
        return this.firstName + ' ' + this.lastName;
    }
    set[name](str) {
        //...
    }
    // static functions
    static sayHello(){
        console.log('hello');
    }
}

var john = new Person('John', 'Doe');
console.log(john.fullName); // John Doe
Person.sayHello()