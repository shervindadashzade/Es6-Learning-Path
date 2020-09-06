function createMachine(name,status){
    return{
        // name : name 
        // this syntax is summirized
        name,
        status
    }
}
// computed property name
let name = 'machine-name';
let machine = {
    // syntax of computed property name
    [name] : 'server',
    'machine-code': '25501'
};
console.log(machine[name]);
console.log(machine["machine-code"]);
// es6 make object method easier by remove :
let server = {
    name : 'server-25',
    // equals to restart: function() { ... }
    restart(){
        console.log(this.name + ' is reastarting ...');
    },
    // you ever can use space like this
    'starting up server'(){
        console.log(this.name+' is starting up...');
    }
}
// how to use functions name with space
server['starting up server']();
server.restart();