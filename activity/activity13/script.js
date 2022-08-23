$(document).ready(function(){

    function timer() {

        setTimeout(function(){
            $('.yellow_light').css({
                'opacity': '100'
            });
            $('.red_light').css({
                'opacity': '0'
            });

            setTimeout(function(){
                    $('.yellow_light').css({
                        'opacity': '0'
                    });
                    $('.green_light').css({
                        'opacity': '100'
                    });

                        setTimeout(function(){
                            $('.green_light').css({
                                'opacity': '0'
                            });
                            $('.red_light').css({
                                'opacity': '100'
                            });
                            
                            timer();

                            }, 60000);

                    }, 3000);

            }, 60000);
    };

    timer();

});

// let timer = setInterval(function(){
//     console.warn("test");
//     clearInterval(timer);
// }, 5000);
// setTimeout(function(){
//     alert("do something");
    
// }, 5000);

// $('yellow_light').css({
//     'opacity': '100'
// });
