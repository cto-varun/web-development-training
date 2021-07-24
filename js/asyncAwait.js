// const res = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("From setTimeOut");
//         reject("Error while executing");
//         // resolve("Hey!!! welcome");
//     }, 1000);
// });

// const resTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("From second promise");
//         resolve("Inside second promise");
//         // reject("Error while executing");
//     }, 1000);
// });


// async function executeMyCode() {
//     try {
//         const result = await res;
//         // const resultTwo = await resTwo;
//         console.log('Result is ', result);
//         // console.log('Result Two is ', resultTwo);
//         console.log('after await')
//     } catch (err) {
//         document.write("Something Went wrong. Please try again later!!!");
//         console.log(`Error :- ${err}`); // mail this error to ourself or we could generate a log for the same.
//     }

// }

// executeMyCode();

// async function getUserDetail() {
//     let usernameContainer = document.getElementById("username");
//     try {
//         const userDetail = await fetch("https://randomuser.me/api/");
//         let res = userDetail.json();
//         res = await res;
//         console.log(res.results[0]);
//         usernameContainer.innerHTML = res.results[0].name.first;
//     } catch (err) {
//         usernameContainer.innerHTML = `Error while fetching user details ${err}`;
//     }
//     usernameContainer.style.display = "block";

// }


function getUserDetail() {
    let usernameContainer = document.getElementById("username");
    try {
        fetch("https://randomuser.me/api/")
            .then(res => {
                console.log('result is ', res);
                return res.json();
            })
            .then(response => {
                // console.log(response.results[0]);
                usernameContainer.innerHTML = response.results[0].name.first;
            })
            .catch((err) => {
                usernameContainer.innerHTML = `Error while fetching user details ${err}`;
            })
            .finally(_ => {
                usernameContainer.style.display = "block";
            })

    } catch (err) {
        usernameContainer.innerHTML = `Error while fetching user details ${err}`;
    }


}