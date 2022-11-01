var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
var saveBtnEl = $('saveBtn');


$('#time').each(function() {
    var timeId = parseInt($(this).attr('#timeId'));
    var currentHr = moment().hours();
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

