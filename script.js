var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
var saveBtnEl = $('.saveBtn');
var currentHr = moment().hours();
var text = $('textarea');


$('.time-block').each(function() {
    var timeId = parseInt($(this).find('.hour').attr('id'));

    localStorage.getItem('work-cal-' + 'id');
    
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
    var button = $(this);
    var row = button.parent();
    var text = row.find('textarea').val();
    var hour = row.find('.hour').attr('id');
    console.log("TEXT FROM TEXTAREA", text);
    localStorage.setItem('work-cal-' + hour, text);
    alert('saved to local storage');
});


