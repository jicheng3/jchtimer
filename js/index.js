$(function() {
	$(window).resize(function() {
		if ($(window).width() < 875) {
			$('#rnavbar').hide();
		}else{
			$('#rnavbar').show();
		}
	});	
});