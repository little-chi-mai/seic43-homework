console.log('If debugging is the process of removing bugs, then programming must be the process of putting them in.');

// # Time converter

// Write a function that accepts a time in AM/PM format (`hh:mm:ssAM` or `hh:mm:ssPM`) and convert it to military (24-hour) time (`hh:mm:ss`).

// Note: 
// - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// - All input times are valid.

// Example:
// ```javascript
// timeConverter('07:05:45AM')
// // expect to return '07:05:45'.

// timeConverter('07:05:45PM')
// // expect to return '19:05:45'.

// timeConverter('12:01:00PM');
// // expect to return '12:01:00'.

// timeConverter('12:01:00AM');
// // expect to return '00:01:00'.
// ```

const timeConverter = function (timeString) {
    let result = '';

    const firstTwoChars = timeString.slice(0, 2);
    const midChars = timeString.slice(2, timeString.length - 2);
    const lastTwoChars = timeString.slice(timeString.length - 2);
    // console.log(firstTwoChars, midChars, lastTwoChars);
    
    if (lastTwoChars.toUpperCase() === 'AM') {
        if (firstTwoChars !== '12') {
            result = firstTwoChars + midChars;
        } else {
            result = '00' + midChars;
        } 
    } else if (lastTwoChars.toUpperCase() === 'PM') {
        if (firstTwoChars !== '12') {
            result = (parseInt(firstTwoChars) + 12).toString() + midChars;
        } else {
            result = firstTwoChars + midChars;
        }
    }
    return result;
}

console.log(timeConverter('12:01:00AM'));
console.log(timeConverter('07:05:45AM'));
console.log(timeConverter('07:05:45PM'));
console.log(timeConverter('12:01:00PM'));