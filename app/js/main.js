$(document).ready(function(){
	$(".mainNav_menuBtn").on("click",function(e){
        e.preventDefault();
        $(".mainNav_drop").toggleClass("active");
        $("body").toggleClass("active");
        $(".mainNav_menuBtn_line").toggleClass("active");
    });
})