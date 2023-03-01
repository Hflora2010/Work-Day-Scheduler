
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$(document).ready(function () {
  var dayDisplayEl = $("#day-display");
  var saveBtn = $(".saveBtn");


  $(saveBtn).on("click", function () {
    //referencing the specific button for the specific textarea
    var input = $(this).siblings(".description").val();
    // console.log(input)
    var hour = $(this).parent().attr("id");
    // console.log(hour);
    localStorage.setItem(hour, input);
  })
  //This function displays the current day
  function displayDay() {
    var currentDay = dayjs().format("dddd, MMMM D YYYY");
    dayDisplayEl.text(currentDay);
  }

  // askBCS helped me to formulate this function by using .moment()
  function hourUpdater() {
    var currentHour = moment().hours();
  
    $(".time-block").each(function () {
      var scheduleHour = parseInt(
        $(this)
          .attr("id")
      );
  
      //past
      if (scheduleHour < currentHour) {
        $(this).addClass("past");
  
        //present
      } else if (scheduleHour === currentHour) {
        // $(this).removeClass("past");
        $(this).addClass(".present");
  
        //future
      } else (scheduleHour > currentHour); {
        // $(this).removeClass("past");
        // $(this).removeClass("present");
        $(this).addClass(".future");
      }
    });
  }
  hourUpdater();

  displayDay();
});




//Getting items from local storage to save on the refresh.
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


  //
  // TODO: Add code to apply the past, present, or future class to each time

  //select all time slots $(time-block) time slot hour to your current dayjs hour. conditional statements to check what time it is.


  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
