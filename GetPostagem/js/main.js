$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});

//Efeito do backgroud ao usar o scroll
$(window).scroll(function () {
    var $height = $(window).scrollTop();

    if ($height > 50) {
        $('header nav').addClass('active-nav');
        $('header nav').removeClass('desative-nav');

    } else {
        $('header nav').addClass('desative-nav');
        $('header nav').removeClass('active-nav');
    }
});

//Efeito Ancora
$(document).on("click", 'a[href*="#"]', function (e) {

    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - 200;

    $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000, function () {

    });
    window.location.hash = target;

    e.preventDefault();
});

//$("#carouselExampleIndicators").carousel({ interval: 500 });
