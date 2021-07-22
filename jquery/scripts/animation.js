$(document).ready(function () {
    $('input').focus(function () {
        // $(this).css('width', '250px');
        $(this).stop().animate({
            width: '250px'
        }, 2000);
    });
    $('input').blur(function () {
        // $(this).css('width', '200px');
        $(this).stop().animate({
            width: '200px'
        }, 1500);
    });
});