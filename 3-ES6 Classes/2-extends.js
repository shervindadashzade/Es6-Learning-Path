// prior to es6, implementing inheritence 
// function Animal(legs){
//     this.legs(legs);
// }
// Animal.prototype.walk = function(){
//     console.log(`walking on ${this.legs} legs`);
// }
// function Bird(legs){
//     Animal.call(this,legs);   
// }
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Animal;


// Bird.prototype.fly = function() {
//     console.log('flying');
// }

// var pigeon = new Bird(2);
// pigeon.walk(); // walking on 2 legs
// pigeon.fly(); // flying

// but is es6 we have
class Animal{
    constructor(legs){
        this.legs = legs;
    }
    walk(){
        console.log(`walking on ${this.legs} legs`);
    }
}
class Bird extends Animal{
    constructor(legs){
        super(legs);
    }
    // you can override methods easily with just redeclare them
    // for static methods you just need => static keyword
    fly(){
        console.log('flying');
    }
}
let bird = new Bird(2);
bird.walk();
bird.fly();
// you can also extend using built-in type such as Array,String,Map and Set
// so clean implemented Queue using Array
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
    console.log(customers.dequeue());
}