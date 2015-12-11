

	$(".myclass3").hover(function() { 
	    $("body").addClass("back"); // agrega la clase en el body
	},function(){
		$("body").removeClass("back"); // al retirar el puntero quita la claseCSS
	});
	
	$(".myclass2").hover(function(){
	    $("body").addClass("back2"); // agrega la clase en el body
	},function(){
		$("body").removeClass("back2"); // al retirar el puntero quita la claseCSS
	});
