//Efeito do Scroll
$(window).scroll(function () {
    var $height = $(window).scrollTop();

    if ($height > 50) {
        $('#banner nav').addClass('fundo-nav');
    } else {
        $('#banner nav').removeClass('fundo-nav');
    }
});

//Efeito Ancora
$(document).on(
    "click",
    'a[href="#home"], a[href="#precos"], a[href="#sobre"], a[href="#contato"]', function (e) {

        var target = $(this).attr("href"); //Get the target
        var scrollToPosition = $(target).offset().top - 130;

        $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000, function () {

        });
        window.location.hash = target;

        e.preventDefault();

        //Remove o nome da ancora da url
        history.replaceState("", null, window.location.pathname);
    });

$(document).ready(function() {
    AOS.init();
});