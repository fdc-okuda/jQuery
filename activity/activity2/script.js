$(document).ready(function(){
    $('.input').on('input', function(){
        $('.output').html($('.input')[0].value);
    })
});