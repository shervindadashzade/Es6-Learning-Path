//a function with default parameter
function say(message = 'hi'){
    console.log(message);
}
//handle default functions parameters inside function body
function meow(message){
    // if message has no value js assign it a undefined value so
    // and here we have js one line if statement
    message = typeof message !== 'undefined' ? message : 'meow';
    console.log(message);
}
say();
say('whats up boy?');
meow();
meow('not default')
// defrence between parameters and arguments => message is a parameter , 'whats up boy?' is a argument :)
// default parameters can be return of another function
function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();
//we can throw some exceptions and error with this method
function required(){
    throw new Error('argument is required');
}
// if x not have value its equals required() thats run required and run a function that throws an error
function add(x = required(), y = required()){
    return x+y;
}
add(10);
console.log(add(10,20));
// in functions we have a object named arguments
function add(x, y = 1, z = 2) {
    console.log(arguments);
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3
