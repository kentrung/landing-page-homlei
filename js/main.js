$(window).bind("load", function() {
    // scrollspy
    $('body').scrollspy({
        target: '#navbar-menu',
        offset: 300
    });
    // click anchor landing page
    $('#navbar-menu li a').click(function (event) {
        $('#navbar-menu li').removeClass('active');
        $(this).parent('li').addClass('active');
        var link = $(this).attr('href');
        var scrollPos = $(link).offset().top - 77;
        $('body,html').animate({
            scrollTop: scrollPos
        }, 500);
        return false;
    });
    // control scroll header
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > 50) {
            // downscroll code
            $('.header').addClass('fix');
            $('#au-slider-scroll').fadeOut();
        } else {
            // upscroll code
            $('.header').removeClass('fix');
            $('#au-slider-scroll').fadeIn();
        }
    });
    // block living mobile
    $('#living-local-readmore').click(function (event) {
        $(this).siblings('.graph').removeClass('plus');
        $(this).remove();
    });
    // config cho div about us
    $('#aboutus-mobile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });
    // config cho floor-plan desktop
    $('.slider-floor-desktop-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        asNavFor: '.slider-floor-desktop-nav'
    });
    $('.slider-floor-desktop-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-floor-desktop-for',
        arrows: false,
        variableWidth: true,
        dots: true,
        customPaging: function (slider, i) {
            // this example would render "tabs" with titles
            return '<button class="tab">' + $(slider.$slides[i]).find('.slide-title').text() + '</button>';
        },
        focusOnSelect: true
    });
    // config cho floor-plan mobile
    $('.slider-floor-mobile-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: false,
      swipe:false,
      swipeToSlide: false,
      touchMove: false,
      asNavFor: '.slider-floor-mobile-nav'
    });
    $('.slider-floor-mobile-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-floor-mobile-for',
      arrows: false,
      draggable: false,
      swipe:false,
      swipeToSlide: false,
      touchMove: false,
      dots: true,
      customPaging: function (slider, i) {
        // this example would render "tabs" with titles
        return '<button class="tab">' + $(slider.$slides[i]).find('.slide-title').text() + '</button>';
      },
      variableWidth: true,
      focusOnSelect: true
    });
    $('#myForm').validator();
    $(".btn-send").on("click", function () {
		$('#myForm').validator('validate');
    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var phonenumber = $('#phonenumber').val();
    var message = $('#message').val();
		if (name && email && phonenumber && message) {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://landing-page-homlei.kentrung.repl.co/sendmail.php?name="+name+"&lastName="+lastName+"&email="+email+"&phonenumber="+phonenumber+"&message="+message+"",
        "method": "GET",
      }
        
      $.ajax(settings).done(function (response) {
        $("#success").css("display", "block");
      });
      }
    });
    $('#fakeLoader').fadeOut('slow');
    $('body').removeClass('overflow');
});