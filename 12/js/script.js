function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
$('.ball').on('click', function () {
	$(this).toggleClass('ball--right');
	$(this).css({'top': getRandomInt(85) + '%'});
});