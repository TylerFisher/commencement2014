$(document).ready(function() {
	$('.mask-text').on('mouseover',function(){
		$(this).parent().find('.mask').css('opacity','0.4');
	}).on('mouseout',function(){
		$(this).parent().find('.mask').css('opacity','0.6');
	});


});




