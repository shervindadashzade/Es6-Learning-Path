//rest parameters should be in the end 
// so we havent this : function example(a,...args,b)
function example(a,b,...args){
    console.log(a);
    console.log(b);
    // is array of arguments
    console.log(args);
}

// function sum(...args){
//     let total = 0;
//     for(let i of args){
//         total += i;
//     }
//     return total;
// }
// sum just numbers types of args array
function sum(...args){
    return args.filter(e => typeof e == 'number')
    .reduce((prev,cur) => prev+cur);
}
console.log(sum(2,'hi',false,5,8,10));

// without rest parameters we can use arguments object
function sum_no_rest(){
    // arguments isnt an instance of Array so you should use Array.prototype
    return Array.prototype.filter.call(arguments,e => typeof e == 'number').reduce(
        (prev,cur) => {
            return prev+cur;
        }
    )
}
// important tip : arrow functions dont have arguments object
console.log(sum_no_rest(2,'hi',false,5,8,10));
// use can use rest parameters in dynamic functions (?)
// dynamic function example 
function party(){
    console.log('this is amazing');
    party = function(){
        console.log('I got too drunk');
    }
}
// afterParty is const and dont redefine
const afterParty = party;

party();
party();
afterParty();