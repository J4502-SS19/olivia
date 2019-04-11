
$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('div ul').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('div ul').removeAttr('style');
	 }
	});//end resize
});//end ready
