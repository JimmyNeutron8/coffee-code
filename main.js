checkBreakpoint();

$('.nav-toggler').click(() => {
  $('.nav-links').slideToggle(200);
});

$(window).resize(function(){
	checkBreakpoint();
});

function checkBreakpoint () {
  if ($(window).width() >= 768){
    if (!$('.nav-links').is(':visible')) {
      $('.nav-links').toggle();
    }
	}else{
    if ($('.nav-links').is(':visible')) {
      $('.nav-links').toggle();
    }
  }
}

$("#about-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-section").offset().top
    }, 2000);
});
$("#services-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services-section").offset().top
    }, 2000);
});
$("#pricing-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#pricing-section").offset().top
    }, 2000);
});
$("#contact-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact-section").offset().top
    }, 2000);
});

$(window).scroll( function(){


        $('.fade').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 200;

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }
        });

    });
