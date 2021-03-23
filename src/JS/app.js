console.log("hello");
$(document).ready(() => {
    $("#author").hide();
    $("#social").hide();
    $("#title").hide();
    $("#enter-btn").hide();
    $("#title").slideDown(1700);
    $("#author").delay(2000).fadeIn(1700);
    $("#social").delay(4000).fadeIn(1700);
    $("#enter-btn").delay(6000).fadeIn(1700);
})