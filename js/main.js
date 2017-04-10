$(document).ready(function() {
    var offset=250, // At what pixels show Back to Top Button
    scrollDuration=300; // Duration of scrolling to top
        $(window).scroll(function() {
	    if ($(this).scrollTop() > offset) {
                $('.top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
                $('.logo').fadeOut(500);
                } else {
		$('.top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
                  $('.logo').fadeIn(500);
                 
		}
	});

	// Smooth animation when scrolling
	$('.top').click(function(event) {
	event.preventDefault();
            $('html, body').animate({
	        scrollTop: 0}, scrollDuration);
                });

	$("#owl-example").owlCarousel({
		navigation : true, 
      	slideSpeed : 500,
      	paginationSpeed : 400,
      	singleItem: true,
		pagination: false,
    	rewindSpeed: 500,
   		autoplay:true,
    	autoplayTimeout:200,
    	autoplayHoverPause:true
	});


	/************* Menu ***************/

	$(".menu-hamburger img").click(function(){
		$(".navbar-nav").toggle("slow");
	})

});

