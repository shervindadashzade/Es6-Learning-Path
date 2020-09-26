// try both true and false for completed and see its result
let completed = true;
// promise constructor recive a function names 'executor'
let learnjs = new Promise(function(resolve,reject){
    setTimeout(()=>{
        if(completed){
            resolve('I have completed learn JS.');
        }else{
            reject('I havent completed learn JS.')
        }
    }, 3 * 1000);
    
});


function makePromise(complete){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(complete){
                resolve("completed");
            }else{
                reject("not completed");
            }
        },3*1000);
    });
}
let learnES = makePromise(true);
// then use
learnES.then(
    success => console.log(success)
).catch( // catch use
    reason => console.log(reason)
).finally(
    // finally use
    ()=> console.log('end of promise')
);