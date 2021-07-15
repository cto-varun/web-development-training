let usernameBox = document.getElementById("username");
function getUsername() {
    // console.log("Button has been clicked");
    let resultElement = document.getElementById("result");
    // console.log(usernameBox.value);
    // usernameBox.value = "Yes!!";
    usernameBox.style.width = "200px";
    if (usernameBox.value === "") {
        resultElement.innerHTML = "Your box is empty";
    } else {
        resultElement.innerHTML = `You have provided ${usernameBox.value}`;
    }
}

function resetInputBox() {
    usernameBox.style.width = "150px";
}

function attachListeners() {
    let getUserButton = document.getElementById("getUserButton");
    getUserButton.addEventListener("click", function (e) {
        // console.log(e);
        getUsername();
    });
}