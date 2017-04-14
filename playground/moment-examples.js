var moment = require('moment');

var now = moment();


var timestamp = 1492190352;

var currentMoment = moment.unix(timestamp);


console.log('Current', currentMoment.format('MMM D, YY @ h:mm a'));


// January 3rd, 2017 @ 12:13 AM
console.log('Current', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
