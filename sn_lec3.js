$(document).ready(function(){
	console.log("Ready!");
	$(".button").click(function(){
	console.log( "clicked!" );
		if($(this).html() == "-"){
			$(this).html("+");
		}
		else{
			$(this).html("-");
		}
		$(this).closest('.title_bar').siblings('.box').slideToggle();
	});
	
	//http://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor
	$(".smoothscroll").click(function(event){
		event.preventDefault();
		//calculate destination place
		var dest=0;
		if($(this.hash).offset().top > $(document).height()-$(window).height()){
		  dest=$(document).height()-$(window).height();
		}
		else{
		  dest=$(this.hash).offset().top;
		}
		//go to destination
		$('html,body').animate({scrollTop:dest}, 1000,'swing');
	});
	console.log("Ready!");
});
