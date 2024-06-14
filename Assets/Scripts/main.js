
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

});

// scroll to top btn

// Get the button
let mybutton = document.querySelector(".to-top-btn-js");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {

    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
