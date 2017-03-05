$(window).scroll(function() {
    var scroll = $(window).scrollTop(); 
    if (scroll > 50) {
        $('.navbar').addClass('navbar-inverse');
    } else {
        $('.navbar').removeClass('navbar-inverse');
    }
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});