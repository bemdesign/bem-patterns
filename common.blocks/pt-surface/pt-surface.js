$('.pt-surface__action').on('click', function(e){
	showPopup(e);
});

$('.pt-surface__close').on('click', function(){
	hidePopup();
});

function showPopup(event) {
	var attribute = $(event.target.attributes['data-name']).val();

	$("div#"+attribute).fadeIn(220);
	$('body').attr('style', 'height: 100vh; overflow: hidden;');
}

function hidePopup() {
	$('.pt-surface').fadeOut(220);
	$('body').attr('style', '');
}

document.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hidePopup();
	}
};