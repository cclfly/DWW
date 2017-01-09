$.ajax('svg/svg-sprite.html', {
	async: false,
	success: function(data) {
		$('head').append($(data));
	}
});