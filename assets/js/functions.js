$(document).ready(function () {
	// Get started!
	var scroll = new SmoothScroll('[data-scroll]');

	if (navigator.userAgent.match(/Trident\/7\./)) {
		$('body').on("mousewheel", function () {
			event.preventDefault();
			var wd = event.wheelDelta;
			var csp = window.pageYOffset;
			window.scrollTo(0, csp - wd);
		});
	}

	$(".navbar-nav .nav-link").on("click", function () {
		$(".navbar-nav").find(".active").removeClass("active");
		$(this).addClass("active");
	});
});