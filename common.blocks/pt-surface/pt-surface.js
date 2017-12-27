$('.pt-surface__action').on('click', function(){
    showPopup();
});

$('.pt-surface__close').on('click', function(){
   $('.pt-surface').fadeOut(220);
});

function showPopup() {
    var attribute = $(event.target.attributes['data-name']).val();
   $("div#"+attribute).fadeIn(220);
}
