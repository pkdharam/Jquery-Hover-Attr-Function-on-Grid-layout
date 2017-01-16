$(document).ready(function() {
	$('.standard').hover(
		function(){
			$(this).find('.caption').slideDown();
			 $(this).css({"opacity":"1"}).attr('title','Bruno Mars');
		},
		function(){
			$(this).find('.caption').slideUp();
			$(this).css({"opacity":"0.6"});
		}
	);
	$('.fade').hover(
		function(){
			$(this).find('.caption').slideDown(250);
			 $(this).css({"opacity":"1"}).attr('title','Shawn Mendes');
		},
		function(){
			$(this).find('.caption').slideUp(250);
			$(this).css({"opacity":"0.6"});
		}
	);
	$('.slide').hover(
		function(){
			$(this).find('.caption').slideDown(250);
			 $(this).css({"opacity":"1"}).attr('title','Enrique Igelesias');
		},
		function(){
			$(this).find('.caption').slideUp(250);
			$(this).css({"opacity":"0.6"});
		}
	);
	$('.huge').hover(
		function(){
			$(this).find('.caption').slideDown(250);
			 $(this).css({"opacity":"1"});
		},
		function(){
			$(this).find('.caption').slideUp(250);
			$(this).css({"opacity":"0.6"});
		}
	);
	
});