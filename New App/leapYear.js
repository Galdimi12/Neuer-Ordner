// program to check leap year
// const year = prompt('Enter a year:');

// function checkLeapYear(year) {

//three conditions to find out the leap year
// if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
//   console.log(year + ' is a leap year');
// } else {
//    console.log(year + ' is not a leap year');
//}
// }

// take input


// checkLeapYear(year);

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return  'Leap year'
            } else {
                return 'Not leap year.'
            }

        } else {
            return 'Not leap year.'
        }

    } else {
        return  'Not leap year.'
    }
}


console.log(isLeapYear(2004));

