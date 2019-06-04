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
