let colors = new Map();
colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');

for(let color of colors){
    console.log(color);
}

// diffrence between for..of Vs for..in
let numbers = [6,7,8];
numbers.name = 'ali';

for(let i in numbers){
    console.log(i);
}
// output : 0 1 2 name

for(let i of numbers){
    console.log(i);
}
//output : 6 7 8
