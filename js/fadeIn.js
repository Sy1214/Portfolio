$(window).scroll(function () {
	fadeAnime();	
	delayFadeAnime();
});

// 自己紹介アニメーション
function fadeAnime() {
	$('.fadeUpTrigger').each(function () {
		var elm = $(this).offset().top - 10;
		var scroll = $(window).scrollTop();
		var height = $(window).height();
		if (scroll >= elm - height) {
			$(this).addClass('fadeUp');
		}
	});
}

// 製作事例アニメーション
function delayFadeAnime() {
	var time = 0.15;
	var val = time;
	$('.delayScroll').each(function () {
	  var parent = this;
	  var elm = $(this).offset().top;
	  var scroll = $(window).scrollTop();
	  var height = $(window).height();
	  var childs = $(this).children();
	  
	  if (scroll >= elm - height && !$(parent).hasClass("play")) {
		 $(childs).each(function () {
			
			if (!$(this).hasClass("fadeUpInOrder")) {
			  $(parent).addClass("play");
			  $(this).css("animation-delay", val + "s");
			  $(this).addClass("fadeUpInOrder");
			  val = val + time;
			  
			  var index = $(childs).index(this);
			  if((childs.length-1) == index){
				 $(parent).removeClass("play");
			  }
			}
		 })
	  }else {
		 $(childs).removeClass("fadeUpInOrder");
		 val = time;
	  }
	})
 }
 