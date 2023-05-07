// Show prompt window
var table = parseInt(prompt("Enter a number from 0 to 10: "));
var msg = '<h2>Multiplication Table for ' + table + '</h2>';
document.write(msg);

// var operator = 'multiplication';

var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

// Do multiplication for numbers between 1 and 10
while (i < 11) {
    msg += table + ' x ' + i + ' = ' + (table * i) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
