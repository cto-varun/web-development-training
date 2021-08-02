$(document).ready(function () {
    $("input[type=text],input[type=email],input[type=password]").keyup(function (e) {
        handleBox(e.target);
        // let username = $("#username");
        // if (username.val() === "") {
        //     $("#username").next('span').html("Empty Username");
        // } else {
        //     $("#username").next('span').html("");
        // }
    });
});


function handleBox(box) {
    if ($(box).val() === "") {
        $(box).next('span').fadeIn().html("Empty " + box.id);
    } else if (box.id === 'password' && $(box).val().length < 5) {
        $(box).next('span').fadeIn().html("Password can not be less than 5 characters");
    } else {
        $(box).next('span').fadeOut().html("");
    }
}