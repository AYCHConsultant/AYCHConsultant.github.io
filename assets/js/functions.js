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

	$("form").submit(function (e) {
		e.preventDefault();
		e.stopPropagation();

		if ($(this)[0].checkValidity()) {
			var name = $("#name").val();
			var email = $("#email").val();
			var telephone = $("#telephone").val();
			var message = $("#message").val();

			$.ajax({
				type: "POST",
				url: 'https://4zsc7rqq1a.execute-api.eu-west-1.amazonaws.com/prod',
				contentType: 'application/json',
				data: JSON.stringify({
					'name': name,
					'email': email,
					'telephone': telephone,
					'message': message
				}),
				success: function (res) {
					$("form").trigger("reset");
					$('#form-response').text('Email was sent.');
				},
				error: function () {
					$('#form-response').text('Error.');
				}
			});
		}

		$(this).addClass('was-validated');
	});

	$(".navbar-nav .nav-link").on("click", function () {
		$(".navbar-nav").find(".active").removeClass("active");
		$(this).addClass("active");
	});
});