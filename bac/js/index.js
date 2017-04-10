$(document).ready(function() {
    var offset=250, // At what pixels show Back to Top Button
    scrollDuration=300; // Duration of scrolling to top
        $(window).scroll(function() {
	    if ($(this).scrollTop() > offset) {
                $('.top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
                $('h1, .pane p').fadeOut(500);
                } else {
		$('.top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
                  $('h1, .pane p').fadeIn(500);
                 
		}
	});

	// Smooth animation when scrolling
	$('.top').click(function(event) {
	event.preventDefault();
            $('html, body').animate({
	        scrollTop: 0}, scrollDuration);
                })
	});
