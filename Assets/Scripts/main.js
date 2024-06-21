
// open / close navbar 2 location dropdown Day 12 / 6 / 24

$('.navbar .navbar-2 .location-dropdown input').click(function () {
    $('.navbar .navbar-2 .location-dropdown .dropdown-menu').addClass('open');
    $('.navbar .navbar-2 .location-dropdown .button svg').css('rotate', '180deg');
});

$('.navbar .navbar-2 .location-dropdown .button svg').click(function () {
    $('.navbar .navbar-2 .location-dropdown .dropdown-menu').toggleClass('open');

    if ($('.navbar .navbar-2 .location-dropdown .dropdown-menu').hasClass('open')) {
        $(this).css('rotate', '180deg');
    } else {
        $(this).css('rotate', '0deg');
    }
});

// Day 13 / 6 / 24

// open / close all category menu

$('.category-navbar .categories .category-1 .c1-a').click(function () {
    $('.category-navbar .categories .category-1 .all-category-menu').toggleClass('open');

    if ($('.category-navbar .categories .category-1 .all-category-menu').hasClass('open')) {
        $('.category-navbar .categories .category-1 .c1-a div img').css('rotate', '180deg');
    } else {
        $('.category-navbar .categories .category-1 .c1-a div img').css('rotate', '0deg');
    }
});

$(document).load($(window).bind("resize", checkPosition));
function checkPosition() {
    if ($(window).width() < 1080) {
        $('.category-navbar .categories .category-1 .all-category-menu').removeClass('open');
        $('.category-navbar .categories .category-1 .c1-a div img').css('rotate', '0deg');
    }
}


// Slider

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false
});

// Day 14 / 6 / 24

// scroll to top btn

// Get the button
let mybutton = document.querySelector(".to-top-btn-js");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {

    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 780 || document.documentElement.scrollTop > 780) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// open / close footer 1 accordion 

$('div.footer .footer-1-accordion .accordion-item .accordion-title').click(function(){
    $(this).toggleClass('open');
    
    // closing nested 1 accordions
    
    if ( ! ($('div.footer .footer-1-accordion .accordion-item .accordion-title.first')).hasClass('open')) {
        $('div.footer .footer-1-accordion .accordion-item .accordion-text .accordion-title').removeClass('open');
    }
});
