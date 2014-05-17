$(document).ready(function(){
	$(".home").parallax("50%", 0.4);
	$(".home3").parallax("50%", 0.4);
	$("nav").localScroll(200);
	$("nav a").click(function(){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
	});
});