## Learning Process
My first task was to implement the moment.js to display the current time within my script.  After looking at how the moment.js was imported into my html, i discovered that it was already included in my starter code with a CDN link.  After console logging the vanilla version of `moment().format()` I needed to make the format of the time display in a cleaner way.  In order to display the current date and time within the html class `currentDay` I initially used the `.show()` method, and later found `.text()` was the one that worked for me.

## Creating the time blocks
I will need to create hour long time blocks that are displayed in one particular day.  I will need to create a set of colors corresponding to Past, Present and Future events within the Daily calendar.  We will assume the work day starts at 9am and ends at 5pm.  Past Events will be in gray, present events in Red, Future events in green.  Local storage will save the text input as long as the save Button (indicated with a Lock symbol) is clicked.  The save button will work with the parent or children element.
using jQuery is easier to manipulate the DOM


## Experimenting
-tried using a jQuery sortable list but took to long to load
-had trouble with custom HTML elements in a `<ul>`, so i started deleting classes to see what bootstrap was displaying or not.
-realized that bootstrap was causing the class `lead` to display limited information
-I will plan on creating an id for each time block that will compare to the moment in `var = exactCurrentDateTime`, if it matches then the class `.present` will display the appropriate color.  
-This was code in the javascript: 
`console.log("the Previous time is " + previousTime + " hours") console.log("the future time is " + futureTime + " hours");`
-experimenting with id class matching current time
Need to get id's to match up with current hour
`var pastTimeSlot = $("#9am"); console.log("the past time slots are " + pastTimeSlot); pastTimeSlot.addClass("past"); var presentTimeSlot = $('#10am');` 
will need to replace the current element with moment.js function
`console.log("the current time slot is " + presentTimeSlot);`
if presentTimeSlot is matching `exactCurrentDateTime` display the CSS property for present
`presentTimeSlot.addClass("present");
var futureTimeSlot = $('#11am');
futureTimeSlot.addClass("future");
console.log("The Future time slots are " + futureTimeSlot);`
I am traversing the document to see if i am able to view the CSS in the console for property
`console.log(document.styleSheets[3]);`
create an array of id's for each time slot
`presentTimeSlot.cssHooks(".present");`
    
    `
if (currentHour > 17) {
    var previousTime = currentHour - minimumTime
    //all is previous time on the planner
} else {
    previousTime = null;
}
if (currentHour < 9) {
    var futureTime = currentHour - maximumTime
    //all is future time on the planner
} else {
    futureTime = null;
}`

    find a way to get the input tag to display text
    `var typeDescription = $('.description')
    typeDescription.text("blah")`

## Execution and class via bootstrap
I found that the hour displayed will need to .`hour` and `.row` and `.time-block` classes will need to be placed together, and the `.description` within each `<div>`.