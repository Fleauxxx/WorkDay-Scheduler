// variables containing the current day month and year and current hour.
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
var saveBtnEl = $('.saveBtn');
var currentHr = moment().hours();
var text = $('.description');

// time-block function that compares current hour to schedule hour and gives them color classes
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

// event listener to save text to the local storage.
saveBtnEl.on('click', function(){
    var button = $(this);
    var row = button.parent();
    var text = row.find('.description').val();
    var hour = row.find('.hour').attr('id');
    console.log("TEXT FROM TEXTAREA", text);
    localStorage.setItem('work-cal-' + hour, text);
    alert('This item has been saved');
    // $('.time-block');
});

// jquery function for EACH textareas
$('#9 .description').val(localStorage.getItem('work-cal-'));
$('#10 .description').val(localStorage.getItem('work-cal-'));
$('#11 .description').val(localStorage.getItem('work-cal-'));
$('#12 .description').val(localStorage.getItem('work-cal-'));
$('#13 .description').val(localStorage.getItem('work-cal-'));
$('#14 .description').val(localStorage.getItem('work-cal-'));
$('#15 .description').val(localStorage.getItem('work-cal-'));
$('#16 .description').val(localStorage.getItem('work-cal-'));
$('#17 .description').val(localStorage.getItem('work-cal-'));


