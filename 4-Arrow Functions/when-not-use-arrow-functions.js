// Event Handlers
const greeting = document.querySelector('#greeting');
const username = document.querySelector('#username');
username.addEventListener('keyup', () => {
  greeting.textContent = 'Hello ' + this.value;
});
// correct way
username.addEventListener('keyup', function () {
    input.textContent = 'Hello ' + this.value;
});
// Objects method
const counter = {
    count: 0,
    next: () => ++this.count,
    current: () => this.count
  };
// correct way
const counter = {
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};
//Class Methods
class Counter {
    constructor() {
      this.count = 0;
    }
    next = () => {
      return ++this.count;
    }
    current = () => {
      return this.count;
    }
  }
//correct way
class Counter {
    constructor() {
      this.count = 0;
    }
    next() {
      return ++this.count;
    }
    current() {
      return this.count;
    }
  }  
// Prototype Methods
function Counter() {
    this.count = 0;
}

Counter.prototype.next = () => {
    return this.count;
};

Counter.prototype.current = () => {
    return ++this.next;
}
//correct way
function Counter() {
    this.count = 0;
}

Counter.prototype.next = function () {
    return this.count;
};

Counter.prototype.current = function () {
    return ++this.next;
}
// Functions that use arguments
const concat = (separator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
//correct way
function concat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
//An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.
//Avoid using the arrow function for event handlers, object methods, class methods, prototype methods, and functions that use the arguments object.