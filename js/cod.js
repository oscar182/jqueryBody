

	$(".myclass3").hover(function() { 
	    $("body").addClass("back");
	},function(){
		$("body").removeClass("back");
	});
	
	$(".myclass2").hover(function(){
	    $("body").addClass("back2");//back es un css
	},function(){
		$("body").removeClass("back2");
	});

/*
$(".myclass2").hover(function(e) { 
    $("body").css("background-color",e.type === "mouseenter"?"blue":"transparent") 
})

$(".myclass2").hover(function() {
	$("body").attr("src","tech.jpg");
		}, function() {
	$("body").css("background-color",e.type === "mouseenter"?"white":"transparent") 
	});

	$(".myclass2").hover(function() {
		$("body").attr("src","tech.jpg");
			}, function() {
		$("body").attr("src","");
	});
*/