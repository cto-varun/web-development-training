let i = 0;
let counterBody;
let counterButton = document.getElementById("counterBtn");
let myCounter = document.getElementById("counter");
counterButton.addEventListener('click', function (event) {
    console.log(event);
    if (event.shiftKey)
        clearInterval(counterBody);
    setTimeout(() => {
        myCounter.innerHTML = 0;
    }, 5000);
});

window.addEventListener('mousemove', function (e) {
    // console.log(e);
    // counterButton.style.left = e.clientX + "px";
    // counterButton.style.top = e.clientY + "px";
    let elem = `<div class="dot" style="top:${e.clientY}px;left:${e.clientX}px"></div>`;
    document.getElementById("container").innerHTML += elem;
});

function initiateTimer() {
    counterBody = setInterval(function () {
        myCounter.innerHTML = i;
        i++;
    }, 1000);
    console.log("hey this worked before");
}

// const initiateTimer = () => {

// }




// let nums = [1, 2, 3, 4, 5];

// for (var num of nums) {
//     runTimer(num);
// }

// function runTimer(n) {
//     setTimeout(function () {
//         console.log(n);
//     }, 1000);
// }

// Stack                   WebAPI


// console.log(3);          setTimeout(function () {
                            // console.log(num);
                            //     }, 1000);
// console.log(2);        setInterval 1000
// console.log(1);





// Callback Queue
// console.log(num)






