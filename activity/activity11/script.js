$(document).ready(function(){
    $('#fdc_textbox').on('input', function(){
        var input_text = $('#fdc_textbox').val();
        $('#fdc_text_ouput').text(input_text);
    });
});