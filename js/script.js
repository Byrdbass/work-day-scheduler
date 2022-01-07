//link the current day in with html class "currentDay"
var currentDateTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
console.log(currentDateTime);
//create a variable for the HTML element that will display the current Date and Time
    //COULD WE CHANGE THE STYLING ON THIS TO GIVE MORE OF A SPACE BEFORE THE FOLLOWING CODE???
var displayCurrentDateTime = $('#currentDay')
displayCurrentDateTime.text(currentDateTime);

        // WILL THE CALENDAR ALWAYS DISPLAY THE CORRECT TIME ZONE FOR THE USER???
// create a display of the current day using moment.js
var currentDay = moment().format('dddd, MMMM Do')
console.log(currentDay)
// traverse the DOM for the class "container" to display the current day
$('.container').text(currentDay);
//create a series of hourly time blocks from 9am to 5pm - 8 hours
var workDay = 8
//find a way to display all of the hourly time blocks for the work day
$( function() {
    $( "#sortable" ).sortable();
  } );
//we may have to use 3 classes (.time-block, .row, and .hour) for each hour frm 9am to 5pm
    //we will need to add the 4th class (of either .past, .present, or .future) to these existing 3
// create a arguement within moment.js that calculates the present hour + or - the time of day between 9am and 5pm
// we will have to force it to only display these times

