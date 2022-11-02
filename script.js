var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
var saveBtnEl = $('.saveBtn');
var currentHr = moment().hours();
var text = $('textarea');


$('.time-block').each(function() {
    var timeId = parseInt($(this).find('.hour').attr('id'));
    if (timeId < currentHr) {
        $(this).addClass('past');
    } else if (timeId === currentHr) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

    }
    
});

saveBtnEl.on('click', function(){
    alert('saved to local storage');
});


