$(document).ready(function() {
    $(".burger").on("click", function() {
        $(".burger__line").toggleClass("burger__line_active");
        $(".menu").toggleClass("menu_active");
    });
});