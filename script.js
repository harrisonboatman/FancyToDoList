// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

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
$('#hour11.description').val(localStorage.getItem("hour11"));
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
