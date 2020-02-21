jQuery(document).ready(function($){
//Togle nav menu on button click
var $root = $('html, body'),
    menu_toggle = $('.navBtn');

menu_toggle.on('click', function(){
    var $this = $(this);

    $this.toggleClass('close');
    $('.menu, .menu-nav, .menu-nav-item').toggleClass('show');
});

// Toggle nav menu on menu item clcik and smooth scrolling
$('.menu-nav-item a').on('click',function(){
    var $this = $(this),
    href = $this.attr('href');

// Toggle nav menu
menu_toggle.removeClass('close');
$this.parents('.menu-nav-item, .menu-nav, .menu').removeClass('show');

// Smooth scrolling
$root.animate({
    scrollTop: $(href).offset().top - 100
}, 500, function(){
    window.location.hash = href;
});

        return false;
    });
    // attach a submit handler to the form
    $(".contact-form").submit(function(event) {
        
    //stop form from submitting normally
    event.preventDefault();

    //serialize submitting form data and get acction

    var $form = $(this),
        url = $form.attr('action')
    });
});

// Main navbar background color onscroll attatchment 

$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $('nav').addClass('bg-color');
    }
    else {
        $('nav').removeClass('bg-color');
    }
});