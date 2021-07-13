$(function(){

	/////// .hbtn 클릭하면 #mobx slideDown 보이기 토글 /////////
	let hv = "100vh";
	
	$(".hbtn").click(function(){  

		
		$("#mobx").slideToggle(300,"easeOutQuint");

		$("#top").css({height:hv});

		hv==="100vh" ? hv="auto" : hv="100vh";

		
	});/////////////////// click  ////////////////////////

	/////// .sbtn 클릭하면 .mos 슬라이드 되면서 보이기 토글  /////////
	$(".sbtn").click(function(){
		$(".mos").stop().slideToggle(300,"easeOutQuint");

	});////////////////// click  ////////////////////////
});