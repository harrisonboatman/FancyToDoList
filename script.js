
var btn = $('.btn');
var txt = $('.description');
var timeDisplayEl = $('#currentDay');
var time
var tttt = dayjs().format('H');
console.log(tttt);
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    let txt = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, txt);

  })
});
  function timeCompare() {
    let currentTime = tttt;

    $('.time-block').each(function () {
      var timeblock = parseInt($(this).attr("id").split('hour')[1]);
      console.log(timeblock);
      if (timeblock < currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      } else if (timeblock == currentTime) {
        $(this).removeClass('future');
        $(this).addClass('present');
        $(this).removeClass('past');
      } else {
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
      }
    })
  };


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


$('#hour0 .description').val(localStorage.getItem("hour0"));
$('#hour1 .description').val(localStorage.getItem("hour1"));
$('#hour2 .description').val(localStorage.getItem("hour2"));
$('#hour3 .description').val(localStorage.getItem("hour3"));
$('#hour4 .description').val(localStorage.getItem("hour4"));
$('#hour5 .description').val(localStorage.getItem("hour5"));
$('#hour6 .description').val(localStorage.getItem("hour6"));
$('#hour7 .description').val(localStorage.getItem("hour7"));
$('#hour8 .description').val(localStorage.getItem("hour8"));
$('#hour9 .description').val(localStorage.getItem("hour9"));
$('#hour10 .description').val(localStorage.getItem("hour10"));
$('#hour11 .description').val(localStorage.getItem("hour11"));
$('#hour12 .description').val(localStorage.getItem("hour12"));
$('#hour13 .description').val(localStorage.getItem("hour13"));
$('#hour14 .description').val(localStorage.getItem("hour14"));
$('#hour15 .description').val(localStorage.getItem("hour15"));
$('#hour16 .description').val(localStorage.getItem("hour16"));
$('#hour17 .description').val(localStorage.getItem("hour17"));
$('#hour18 .description').val(localStorage.getItem("hour18"));
$('#hour19 .description').val(localStorage.getItem("hour19"));
$('#hour20 .description').val(localStorage.getItem("hour20"));
$('#hour21 .description').val(localStorage.getItem("hour21"));
$('#hour22 .description').val(localStorage.getItem("hour22"));
$('#hour23 .description').val(localStorage.getItem("hour23"));

timeCompare();
displayTime();
setInterval(displayTime, 1000);
console.log(tttt);
console.log(timeblock);
