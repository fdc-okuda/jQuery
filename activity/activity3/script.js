$(document).ready(function(){
    $(".blue").on("click", function(){
        $(".square").css('background-color', 'blue');
    });
    $(".red").on("click", function(){
        $(".square").css('background-color', 'red');
    });
    $(".yellow").on("click", function(){
        $(".square").css('background-color', 'yellow');
    });
});