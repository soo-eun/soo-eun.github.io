
//1.우측 상단 직무수행관련 사용가능한 프로그램 목록 나열 및 자동 슬라이드
setInterval("auto_banner()",3000);
function auto_banner(){
		$("aside ul").stop().animate({ marginLeft: "-100%"},1000,function(){
				$("aside ul li:first").appendTo("aside ul");
				$("aside ul").css({ marginLeft: 0 });
		});
};


//------------2. 인트로 관련 종합 함수,셋인터벌 구역----------------------
//2.1, 바형식의 네비게이션 조작버튼 선택 위치 효과  (    (  ) () () ()     )
function intro_select(num){
		$(".c1_btn2 button").css({ padding:"1px 0"});
		$(".c1_btn2 button:eq("+ num +")").stop().animate({ padding:"1px 20px"});
};
//2.2 좌우 조작버튼 내에 존재하는 현재 보여지는 페이지번호/리스트 마지막 페이지 번호
function intro_count(num,num2){
		$(".c1_btn1 span:first").text( num +1 );
		$(".c1_btn1 span:last").text( num2 +1 );
};
//2.3 인트로 슬라이드 오토갤리 셋인터벌
let fc = 0;
let lc
let ag = setInterval("autoGallery()",3000);
function autoGallery(){

			lc = $(".c1 li:last").index();
			fc += 1;
			if( fc <= lc ){
						$(".c1 ul").stop().animate({ marginLeft: -100 * fc +"%" });			
						intro_select(fc);
						intro_count(fc,lc);
			}else{

						$(".c1 li:first").appendTo(".c1 ul");  //조작
						$(".c1 ul").css({ marginLeft: -100 * (lc -1) +"%" }); //조작

						$(".c1 ul").stop().animate({ marginLeft: -100 * lc +"%" },function(){
								$(".c1 li:last").prependTo(".c1 ul");
								$(".c1 ul").css({ marginLeft: 0});
								fc = 0;
								intro_select(fc);	
								intro_count(fc,lc);		
			
						});

			};

};

function autoGallery_re(){

	lc = $(".c1 li:last").index();
	fc -= 1;

	if( fc >= 0 ){
				$(".c1 ul").stop().animate({ marginLeft: -100 * fc +"%" });			
				intro_select(fc);
				intro_count(fc,lc);
	}else{

				$(".c1 li:last").prependTo(".c1 ul");  //조작
				$(".c1 ul").css({ marginLeft: "-100%" }); //조작


				$(".c1 ul").stop().animate({ marginLeft: 0 },function(){

						$(".c1 li:first").appendTo(".c1 ul");
						$(".c1 ul").css({ marginLeft: -100 * lc +"%" });
						fc = lc;
						intro_select(fc);	
						intro_count(fc,lc);						
				});
	};
};
//-------------------------------------------------------------------------



$(function(){

			//1.헤더
			$("#header").mouseover(function(){
					$("#header").stop().animate({  height:"200px" },"fast");
			});
			$("#header").mouseleave(function(){
					$("#header").stop().animate({  height:"80px" },"fast");
			});
			$(".gnb li").mouseover(function(){
						$(this).children().stop().animate({ fontSize:"20px" },"fast");
						$(this).stop().animate({ margin:"10px 40px" },"fast");
			});
			$(".gnb li").mouseleave(function(){
					$(this).children().stop().animate({ fontSize:"16px" },"fast");
					$(this).stop().animate({ margin:"10px 20px" },"fast");
			});

			
			//2. scrollTop(브라우저에서 발생되는 세로 스크롤바의 위치를 컨트롤)
			$(".gnb li").click(function(){
							$("html").stop().animate({ scrollTop:  1000 * $(this).index() });
			});
			$(".top_btn").click(function(){
				$("html").stop().animate({ scrollTop:  0 });
			});

			//3. c1 (1)오토갤러리+(2)좌우조작-(3)바형식의 네비게이션 조작 추가
			$(".c1_btn2 button:last").hide();
			intro_select(0);
			intro_count(0,$(".c1 li:last").index() );

			$(".c1_btn2 button:last").hide();
			$(".c1_btn2 button:not(:last)").click(function(){
							clearInterval(ag);
							$(".c1_btn2 button:last").fadeIn();
							fc = $(this).index();

							intro_select(fc);
							intro_count(fc,$(".c1 li:last").index());
							$(".c1 ul").stop().animate({ marginLeft: -100 * fc +"%" });			
			});		

			$(".c1_btn2 button:last").click(function(){
					ag = setInterval("autoGallery()",3000);
					$(this).fadeOut();
			});

			$(".c1_btn1 button:last").click(function(){
					clearInterval(ag);
					$(".c1_btn2 button:last").fadeIn();
					autoGallery();
			});

			$(".c1_btn1 button:first").click(function(){
					clearInterval(ag);
					$(".c1_btn2 button:last").fadeIn();
					autoGallery_re();
			});

			//4. c2 클로즈업 이미지 마우스 오버시 이미지 확대/ 벗어났을시 이미지 크기 원상복귀
			$(".closeup img").mouseover(function(){
						$(this).stop().animate({ width:"1400px", height:"420px", margin:"-30px 0 0 -100px" },"fast");
			});
			$(".closeup img").mouseleave(function(){
						$(this).stop().animate({ width:"1200px", height:"360px", margin:0 },"fast");
			});



			//5. c5 포트폴리오 조작&동작
			$(".c5>div>div:nth-of-type(1) button:first").click(function(){
						$(".c5 .works_language").hide();
						$(".c5 .works_2d").fadeIn("fast").css({display:"flex" });
			});

			$(".c5>div>div:nth-of-type(1) button:last").click(function(){
					$(".c5 .works_2d").hide();
					$(".c5 .works_language").fadeIn("fast").css({display:"flex"});
			});




							$(".works_btn span:eq(1)").text( $(".works_2d li:last").index() + 1 );
							$(".works_2d").css({ width: 100 * ($(".works_2d li:last").index()+1) +"%" });
							$(".works_language").css({ width: 100 * ($(".works_language li:last").index()+1) +"%" });

							let a = $(".c5 .works_2d");
							let wc = 0;  //works_list count
							$(".works_btn span:eq(0)").text(wc+1);

							// 포트폴리오 카테고리 구분 메뉴(2d, web)
							$(".c5>div>div:nth-of-type(1) button").click(function(){

										if( $(this).index() == 0  ){
												a = $(".c5 .works_2d");
										}else{
												a = $(".c5 .works_language");
										};
										wc = 0;
										$(".works_btn span:eq(0)").text(wc+1);
										$(".works_btn span:eq(1)").text( a.children("li:last").index() + 1 );
										a.css({ marginLeft:0 });

							});


							$(".works_btn button:first").click(function(){
										wc -= 1;
										if( wc >= 0 ){
												a.stop().animate({ marginLeft: -100 * wc +"%" });	
												$(".works_btn span:eq(0)").text(wc+1);
										}else{
												a.children("li:last").prependTo( a );
												a.css({ marginLeft: "-100%" });
												a.stop().animate({ marginLeft: 0 },function(){

														a.children("li:first").appendTo( a );
														a.css({ marginLeft: -100* a.children("li:last").index() + "%" });
														wc =  a.children("li:last").index();
														$(".works_btn span:eq(0)").text(wc+1);
												});
										};	
							});

							$(".works_btn button:last").click(function(){		
										wc += 1;
										if( wc <= a.children("li:last").index() ){
												a.stop().animate({ marginLeft: -100 * wc +"%" });	
												$(".works_btn span:eq(0)").text(wc+1);
										}else{
												a.children("li:first").appendTo( a );
												a.css({ marginLeft: -100 * (a.children("li:last").index() -1) +"%" });
												a.stop().animate({ marginLeft: -100* a.children("li:last").index() + "%" },function(){
														a.children("li:last").prependTo( a );
														a.css({ marginLeft: 0 });
														wc = 0;
														$(".works_btn span:eq(0)").text(wc+1);
												});
										};								
							});






			//스크롤바의 위치에 따른 동작 명령어 제어(scrollTop)
			let sn    // 스크롤바(S)croll의 위치는 가변성(언제든 사용자의 의해 변경)을 포함합니다. 스크롤바의 이동값(N)umber 을 기록할 변수

			$(window).scroll(function(){
					sn = $(window).scrollTop();
					$("h1").text(sn);
			});







});

































