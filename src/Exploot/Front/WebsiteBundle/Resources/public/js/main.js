$(document).ready(function(){
	$(".home").parallax("50%", 0.4);
	$(".home2").parallax("50%", 0.4);
	$("nav").localScroll(800);
	$("nav a").click(function(){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
	});
});