$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $('.up').removeClass('hide');
        } else {
            $('.up').addClass('hide');
        }
    })

    $('.up').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ 
            scrollTop: 0
        }, 1500)
    })

    $('.dropdown').on('click', function(event) {
        event.preventDefault();
        $('.dropdown-open').slideToggle();
    })
})