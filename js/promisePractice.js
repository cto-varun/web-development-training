const res = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("From setTimeOut");
        // resolve("Hey!!! welcome");
        reject("Error while executing");
    }, 1000);
});

res
    // .then(result => console.log("After setTimeOut ", result))
    .then(result => {
        console.log("After setTimeOut ", result);
    })
    .then(_ => {
        console.log('Running second function');
    })
    .then(_ => {
        console.log('Running third function');
    })
    .catch(err => {
        console.log(`Error :- ${err}`)
    })
    .finally(_ => {
        console.log("Inside finally block");
    });





// stack               webapi



// callback queue