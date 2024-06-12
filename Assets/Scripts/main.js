
// open / close navbar 2 location dropdown Day 12 / 6 / 24

$('.navbar .navbar-2 .location-dropdown input').click(function(){
    $('.navbar .navbar-2 .location-dropdown .dropdown-menu').addClass('open');
    $('.navbar .navbar-2 .location-dropdown .button svg').css('rotate', '180deg');
});

$('.navbar .navbar-2 .location-dropdown .button svg').click(function(){
    $('.navbar .navbar-2 .location-dropdown .dropdown-menu').toggleClass('open');
    
    if ( $('.navbar .navbar-2 .location-dropdown .dropdown-menu').hasClass('open') ){
        $(this).css('rotate', '180deg');
    } else {
        $(this).css('rotate', '0deg');
    }
});