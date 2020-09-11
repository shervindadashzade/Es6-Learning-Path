export let a = 10,
           b = 20,
           result = 0;

export function sum() {
  result = a + b;
  return result;
}

export function multiply() {
  result = a * b;
  return result;
}
// cause an error because we use export inside an if statment and import and export should be use in static so js know what should exported and what should imported
//if( requiredSum ) {
 //   export sum;
 //} 
 // aliasing in js modules
function power2(a){
    return a*a;
}
export { power2 as sqrt };