let loaderDiv = document.getElementById("loader");
// let username = document.getElementById("username");

function initiateRequest() {
    loaderDiv.classList.toggle('animate');
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside promise");
            resolve("API call has got the response");
            // reject("Error while getting data from the API");
        }, 2000);
    });

    result
        .then((res) => {
            console.log("After Promise call ", res);
        })
        .then(_ => {
            console.log('Inside second then ');
        })
        .then(_ => {
            console.log('Inside Third then');
            // throw new Error('hey error');
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(_ => {
            loaderDiv.classList.toggle('animate');
        })
}

function runAllPromises() {
    let promiseOne = new Promise((resolve, reject) => {
        resolve('Promise One');
    });
    let promiseTwo = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Two");
        }, 2000);
    });
    let promiseThree = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Three");
        }, 3000);
    });
    Promise.all([promiseOne, promiseTwo, promiseThree]).then((res) => {
        console.log(res);
    });
}


async function initiateRequestWithAsyncAwait() {
    try {
        loaderDiv.classList.toggle('animate');
        let result = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Inside promise");
                resolve("API call has got the response");
                // reject("Error while getting data from the API");
            }, 2000);
        });

        let res = await result;
        console.log('res ', res);
        loaderDiv.classList.toggle('animate');
    } catch (err) {
        console.log('Error ', err);
    }
}


async function fetchUser() {
    try {
        loaderDiv.classList.toggle('animate');
        let userData = await fetch("https://randomuser.me/api/");
        let response = await userData.json();

        console.log("userData are ", response.results[0]);
        // const {
        //     title,
        //     last,
        //     first
        // } = response.results[0].name;
        const {
            name: {
                title,
                first,
                last
            },
            id,
            dob,
            email
        } = response.results[0];
        username.innerHTML = `Username is  ${title}  ${first}  ${last}`;
        // fetch("https://randomuser.me/api/")
        //     .then(res => {
        //         // console.log('res ', res.json());
        //         return res.json();
        //     })
        //     .then(response => {
        //         console.log('res ', response.results[0].gender);
        //     })
        //     .catch(err => {
        //         console.log(`Error while fetching user data from the API ${err}`);
        //     })
        loaderDiv.classList.toggle('animate');
    } catch (err) {
        loaderDiv.classList.toggle('animate');
        console.log(`Error while fetching user data from the API ${err}`);
    }
}

// runAllPromises();





// let person = {
//     name: 'varun',
//     age: 32,
//     gender: 'male',
//     profession: 'developer'
// };
// const {
//     name,
//     age,
//     gender,
//     profession
// } = person;
// let name = person.name;
// let age = person.age;
// let gender = person.gender;
// let profession = person.profession;