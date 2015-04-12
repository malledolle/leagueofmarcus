$(function () {

	var player = $('.player'),
		audio = $('audio'),
		bpm = audio.data('bpm'),
		pulse = (60 / bpm) * 1000;


	setInterval(function() {
		pulsing()}, pulse);
	
	
	function pulsing() {
	player.addClass('pulse');

	setTimeout(function () {

		player.removeClass('pulse');

	}, pulse - 100);

};
	
})


