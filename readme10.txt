
This is not a tutorials. There are my codes created for the request below:

Modify the image update script from lesson 4 to include a debug control variable and debugging output when the script is in debug mode.  The debug control variable is to be a global variable that can be updated in one place when editing the script and updated as needed when the script is running.

Debug mode can be set on/off manually by editing and reloading the script. When the script is running, if debug mode is on, it should be able to be turned off in the page loaded in the browser.

If debug mode is on, the minimum debug output will include:

    When an image is clicked with indication of which image was clicked
    What text  the user input and which input field was used
    Evaluation of the text input and indication of what processing is done
        Number in correct range
        Number not in correct range
        Not a number
        Image updated based on correct input
        User notification if input is incorrect

Debug output will be added to the document using either innerHTML or the DOM. No debug output should be overwritten at any point.
-----------------------------------------------------------------------------------
Create a basic webpage that will include to number images side by side.  Both number images should start with a zero showing.  Under each number image will be a text input to get a number from the user.  Provide an appropriate user prompt indicating what should be done.

Users should be able to enter a number from 1 to 5 in either text input.  Clicking on the corresponding image will trigger a function that checks the users input and updates the number image to match the input.

One image update processing is to use if/then statements.  The second image update processing is to use a switch statement.

If the user input is not a number, alert them for proper input.  If the user enters a number not in the 1 to 5 range, alert them their number is too small or large.