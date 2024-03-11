$(document).ready(function () {
    AOS.init();
});

//Efeito do backgroud ao usar o scroll
$(window).scroll(function () {
    var $height = $(window).scrollTop();

    if ($height > 50) {
        $('header nav').addClass('active-nav');
        $('header nav a').addClass('active-cores');
        $('header nav .logo img').addClass('active-logo');

        $('#logo-branca').addClass('logo-branca');
        $('#logo-preta').addClass('logo-preta');

    } else {
        $('header nav').removeClass('active-nav');
        $('header nav a').removeClass('active-cores');
        $('header nav .logo img').removeClass('active-logo');
        $('header nav .logo img').addClass('desative-logo');

        $('#logo-branca').removeClass('logo-branca');
        $('#logo-preta').removeClass('logo-preta');
    }
});

//Efeito Ancora
$(document).on("click", 'a[href*="#"]', function (e) {

    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - 90;

    $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000, function () {

    });
    window.location.hash = target;

    e.preventDefault();

    //Remove o nome da ancora da url
    history.replaceState("", null, window.location.pathname);
});