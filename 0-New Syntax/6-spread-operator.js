// ... operator allows to spread iterable objects like arrays,maps,sets
const odd = [1,3,5];
const combined = [2,4,6,...odd];
// you can use ... operator every where example as a spread oprator not as a rest-parameter
// spread operator will open the array
const combined2 = [2,...odd,4,6];
function compare(a,b){
    return a-b;
}
var result = compare.apply(null,[1,2]);
//or
result = compare(...[1,2]);
console.log(result)
//push arrays
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];
rivers.push(...moreRivers);
console.log(rivers);
//fun example of strings
let str = 'hello';
const chars = [...str];
console.log(chars);