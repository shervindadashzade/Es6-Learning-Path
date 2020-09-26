// promise chaining example
let p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(10);
    },3*1000);
})
p.then(result => {
    console.log(result);
    // this return accsualy retrun a promise
    return result*2; 
    // this value goes to next then 
}).then(result => {
    console.log(result);
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(result*3);
        },3*1000);
    })
}).then(result =>{
    console.log(result);
});

// a useful example of chaining promise in js
function getUser(userId){
    return new Promise(function(resolve,reject){
        console.log('getting user information from database');
        setTimeout(()=> resolve({
            id : userId,
            username: 'admin'
        }),3*100);
    });
}
function getServices(user){
    return new Promise(function (resolve,reject){
        console.log(`get services for user with id ${user.id}`);
        setTimeout(()=> resolve(['VPN','EMAIL','CDN'])
        ,3*1000);
    });
}
function getCost(services){
    console.log(`get cost for services : ${services}`);
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(100*services.length);
        },3*100);
    });
    
}
getUser(101)
.then(getServices)
.then(getCost)
.then( cost => console.log(`all services costs ${cost}\$`)
);