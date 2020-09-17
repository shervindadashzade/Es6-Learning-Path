function Person(name){
    // check if new is before call function
    // if new was used new.target is a refrence to function
    // else it will be undefined
    if(!new.target){
        throw "must use new Operator with Person";
    }
    this.name = name;
}
let john = new Person('John');
console.log(john.name);

// in class new.targer rencrence on function
class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let john = new Person('John Doe'); // Person
let lily = new Employee('Lily Bush', 'Programmer'); // Employee