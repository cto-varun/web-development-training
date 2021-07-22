function getUser() {
    // $("#btn").fadeOut();
    $("#loader-container").fadeIn();
    $.get("https://randomuser.me/api/", function (res) {
        const { results } = res;
        const { name: { title, first, last } } = results[0];
        const fullName = $("#username").html() + `<br/> Username :- ${title} ${first} ${last}`;
        $("#username").html(fullName);
        // $("#btn").fadeIn();
        $("#loader-container").fadeOut();
    });
}