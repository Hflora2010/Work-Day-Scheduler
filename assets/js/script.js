
//wrapping code in document.ready so the code doesn't run until browser has finished rendering all items.
$(document).ready(function () {
  var dayDisplayEl = $("#day-display");
  var saveBtn = $(".saveBtn");


  $(saveBtn).on("click", function () {
    //referencing the specific button for the specific textarea
    var input = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, input);
  })

  //This function displays the current day
  function displayDay() {
    var currentDay = dayjs().format("dddd, MMMM D, YYYY");
    dayDisplayEl.text(currentDay);
  }

  // askBCS helped me to formulate this function by using .moment(). Comparing the schedule hour to the current hour with moment. 
  function hourUpdater() {
    var currentHour = moment().hours();

  //making the schedule hour a number so it can be compared to the current hour number.
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

