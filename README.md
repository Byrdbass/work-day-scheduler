## Learning Process
My first task was to implement the moment.js to display the current time within my script.  After looking at how the moment.js was imported into my html, i discovered that it was already included in my starter code with a CDN link.  After console logging the vanilla version of `moment().format()` I needed to make the format of the time display in a cleaner way.  In order to display the current date and time within the html class `currentDay` I initially used the `.show()` method, and later found `.text()` was the one that worked for me.

## Creating the time blocks
I will need to create hour long time blocks that are displayed in one particular day.  I will need to create a set of colors corresponding to Past, Present and Future events within the Daily calendar.  We will assume the work day starts at 9am and ends at 5pm.  Past Events will be in gray, present events in Red, Future events in green.  Local storage will save the text input as long as the save Button (indicated with a Lock symbol) is clicked.  The save button will work with the parent or children element.
using jQuery is easier to manipulate the DOM


## Experimenting
-tried using a jQuery sortable list but took to long to load
-had trouble with custom HTML elements in a `<ul>`, so i started deleting classes to see what bootstrap was displaying or not.
