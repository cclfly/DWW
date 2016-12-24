$.ajax('extract-svg.html', {
	async: false,
	success: function(data) {
		$('#svg').html(data);
		$('#svg').hide()
	}
});