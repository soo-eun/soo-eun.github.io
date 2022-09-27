
setInterval("auto_banner()",3000);
function auto_banner(){
		$("aside ul").stop().animate({ marginLeft: "-100%"},1000,function(){
				$("aside ul li:first").appendTo("aside ul");
				$("aside ul").css({ marginLeft: 0 });
		});
};




$(function(){

	$('slider').slick({
		  slide:'div',
		  infinite:true,
		  slideToShow:1,
		  autoplay: true,
		  autoplaySpeed:1000,
		  dots:true,
		  vertical:false,
		  
		
	  });


	$(window).resize(function(){
			if(  $(window).width() < 1200  ){ // 모바일,테블릿
					$(".message").show();
					$(".message span").text( $(window).width() +"px" );
			}else{ //데스크탑
					$(".message").hide();
			};  
	});

  //1.헤더

	$(".gnb li button").mouseover(function(){
				$(this).children().stop().animate({ fontSize:"20px" },"fast");
				$(this).stop().animate({ padding:"30px 40px 0 40px" },"fast");
	});
	$(".gnb li button").mouseleave(function(){
			$(this).children().stop().animate({ fontSize:"16px" },"fast");
			$(this).stop().animate({ padding:"30px 0 0 20px" },"fast");
	});


	let s1H = parseInt($(".c1").css("height"));  
	let s2H = parseInt($(".c2").css("height")) + s1H; 
	let s3H = parseInt($(".c3").css("height")) + s2H;
	let s4H = parseInt($(".c4").css("height")) + s3H;
	let s5H = parseInt($(".c5").css("height")) + s4H;
	let s6H = parseInt($(".c6").css("height")) + s5H;

	let sTotal =[ 0, s1H, s2H, s3H, s4H, s5H, s6H ];

	$(".gnb li").click(function(){
				

				if( $(this).index() <3 ){   $("html").stop().animate({ scrollTop:  sTotal[$(this).index()] });  }

				if( $(this).index() == 3){  $("html").stop().animate({ scrollTop:  3430 }); } 
				if( $(this).index() == 4){  $("html").stop().animate({ scrollTop:  4550 });  } 		
	});

	$(".top_btn").click(function(){
		$("html").stop().animate({ scrollTop:  0 });
	});

	
	
	$(".top_btn").hide();

	let sn
	$(window).scroll(function(){

			sn = $(window).scrollTop();
			//$("h1").text(sn);
   
			if( sn > 1000){
				$("#header").css({ background:"#fff", boxShadow:"0 0 5px rgba(0,0,0,0.2)"});
			}else{
				$("#header").css({ background:"none", boxShadow:"0 0 5px rgba(0,0,0,0)"});
			};




			if(sn>2300){
				$(".c4 li:eq(0) p:nth-of-type(2) span").stop().animate({ width: "95%" },500); //그래픽숙련도
				$(".c4 li:eq(1) p:nth-of-type(2) span").stop().animate({ width: "85%" },700); //랭귀지
				$(".c4 li:eq(2) p:nth-of-type(2) span").stop().animate({ width: "85%" },900); //스타일
				$(".c4 li:eq(3) p:nth-of-type(2) span").stop().animate({ width: "70%" },1200); //스크립트
			};



			if( sn < 2000 ){
				$(".top_btn").fadeOut();
			}else{
				$(".top_btn").fadeIn();
			};


	});


	$(".portfolio li:eq(0) img").mouseover(function(){  $(this).stop().animate({ width:980, height:412, margin:"-21px 0 0 -50px" },"fast")  });
	$(".portfolio li:eq(0) img").mouseleave(function(){  $(this).stop().animate({ width:880, height:370, margin:0 },"fast")  });

	$(".portfolio li:eq(1) img,.portfolio li:eq(2) img,.portfolio li:eq(3) img").mouseover(function(){  $(this).stop().animate({ width:370, height:507, margin:"-70px 0 0 -50px" },"fast")  });
	$(".portfolio li:eq(1) img,.portfolio li:eq(2) img,.portfolio li:eq(3) img").mouseleave(function(){  $(this).stop().animate({ width:270, height:370, margin:0 },"fast")  });


	$(".portfolio li:eq(4) img").mouseover(function(){  $(this).stop().animate({ width:665, height:435, margin:"-32px 0 0 -50px" },"fast")  });
	$(".portfolio li:eq(4) img").mouseleave(function(){  $(this).stop().animate({ width:565, height:370, margin:0 },"fast")  });
});
































