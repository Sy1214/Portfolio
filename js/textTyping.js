$(document).ready(function () {
	var elm = $(".typeTextAnime");
	elm.each(function () {
		var txt = $(this).html();
		var txtbox = "";
		txt.split('').forEach(function (n) {
			if (n !== " ") {
				txtbox += '<span>' + n + '</span>';
			} else {
				txtbox += n;
			}
		});
		$(this).html(txtbox);
	});
	typeTxt();
	$("#splash").delay(1200).fadeOut(1200);
});

function typeTxt() {
	$('.typeTextAnime').each(function () {
		var thisChild = "";
		thisChild = $(this).children();
		thisChild.each(function (i) {
			var time = 80;
			$(this).delay(time * i).fadeIn(time);
		});
	});
}