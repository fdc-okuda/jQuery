$(document).ready(function(){
    $('.enter').on('click', function(){
        var text = $('#fdc_textbox')[0].value;
        if (text == "fdc"){
            $(function(){
                $('#fdc_checkbox').prop('checked', true);
            });
        } else {
            $(function(){
                $('#fdc_checkbox').prop('checked', false);
            });
        }
    });

    $('.clear').on('click', function(){
        $('#fdc_textbox').val('');
    })
    
});

