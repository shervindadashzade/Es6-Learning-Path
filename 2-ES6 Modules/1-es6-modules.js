// es6 modules use in strict mode that means any varialbe and functions you decelare wont be added to the global scope
// package.json added to say nodejs see js files as modules
// aliasing message as msg
import {message as msg,setMessage,getMessage} from './message.js';
setMessage('this is a test');
console.log(getMessage());
console.log(msg)
// you cant chage value of message directly because when you import a binding it behave like a const
// so below command cause error
//message = 'hi';
//import every thing from a module as a object 
// this import called namespace import
import * as cal from './cal.js';
console.log(cal.sum());
// cause an error because we use export inside a function and import and export should be use in static so js know what should exported and what should imported 
//function importSum() {
//     import {sum} from './cal.js';
// }
// Note : ES2020 introduced the function-like object import() that allows you to dynamically import a module.

// imported from cal with aliasing
console.log(cal.sqrt(2));

//re-exporting
export {setMessage as setMsg};
// you even can export directly without import
// export {setMessage as setMsg } from './message.js';

// import without binding
import './array.js';
console.log([1,2,3].contain(5));

// import default export
// dont use {}
// you can use every name
import sort,{ heap_sort } from './sort.js';
// aliasing in default exported
//import {default as quick_sort, heap_sort } from './sort.js';
sort([2,3]);
heap_sort();
