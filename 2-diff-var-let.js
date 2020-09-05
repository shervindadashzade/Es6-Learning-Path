// can access from any where and any function
var counter = 10;

function increase(){
    // its a local variable and cant access from out of function scope
    var counter = 20;

}
// var can access out of loop but let cannot 
// and very importent diffrence beetwen ' and ` is ` can integereted variables to text via ${} sign :)

for(var i=0;i<5;i++){
    console.log(`inside the loop: ${i}`);
}
console.log(`outside of loop: ${i}`);

