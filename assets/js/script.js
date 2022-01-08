//link the current day in with html class "currentDay"
var exactCurrentDateTime = moment().format('dddd, MMMM Do YYYY, hh:mm:ss a')
console.log("The exact current time is " + exactCurrentDateTime)
var displayCurrentDateTime = $('#Today')
displayCurrentDateTime.text(exactCurrentDateTime);
//add the function from moment for current hour
var currentHour = moment().hour();
console.log("The current hour in military time is " + currentHour);
var currentTimeSlot = currentHour;
console.log("the current time slot is " + currentTimeSlot);
var minimumTime = 9
var maximumTime = 17
var previousTime = moment().diff(minimumTime, 'hours').format('hh');
console.log("the Previous time is " + previousTime + " hours");
var futureTime = moment().add(maximumTime, 'hours').format('hh')
console.log("the future time is " + previousTime + " hours");
//experimenting with id class matching current time
//Need to get id's to match up with current hour
var pastTimeSlot = $("#9am");
console.log("the past time slots are " + pastTimeSlot);
pastTimeSlot.addClass("past");
var presentTimeSlot = $('#10am'); //will need to replace the current element with moment.js function
console.log("the current time slot is " + presentTimeSlot);
presentTimeSlot.addClass("present");
var futureTimeSlot = $('#11am');
futureTimeSlot.addClass("future");
console.log("The Future time slots are " + futureTimeSlot);
//I am traversing the document to see if i am able to view the CSS in the console for property
//console.log(document.styleSheets[3]);
//create an array of id's for each time slot
// presentTimeSlot.cssHooks(".present");
//if presentTimeSlot is matching exactCurrentDateTime display the CSS property for present

//create a variable for the HTML element that will display the current Date and Time
    //COULD WE CHANGE THE STYLING ON THIS TO GIVE MORE OF A SPACE BEFORE THE FOLLOWING CODE???

        // WILL THE CALENDAR ALWAYS DISPLAY THE CORRECT TIME ZONE FOR THE USER???
// create a display of the current day using moment.js

//create a series of hourly time blocks from 9am to 5pm - 8 hours
var workDay = 8
//find a way to display all of the hourly time blocks for the work day
// var typeDescription = $('.description')
// typeDescription.text("blah")
//we may have to use 3 classes (.time-block, .row, and .hour) for each hour frm 9am to 5pm
    //we will need to add the 4th class (of either .past, .present, or .future) to these existing 3
// create a arguement within moment.js that calculates the present hour + or - the time of day between 9am and 5pm
// we will have to force it to only display these times

