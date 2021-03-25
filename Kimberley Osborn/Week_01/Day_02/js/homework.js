// 1. The Calculator
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  const square = number * number;
  console.log(`The result of squaring the number ${ number } is ${ square }`);
  return square;
};
squareNumber (2);

//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
//It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
  const half = number/2;
  console.log(`Half of ${ number } is ${ half }`);
  return half;
};
halfNumber (6);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents
// of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (number1, number2) {
  const percentage = (number1 / number2) * 100;
  console.log(`${ number1 } is ${ percentage }% of ${ number2 }`);
  return percentage
};
percentOf (50, 100);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that,
// and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
  const area = Math.PI * radius ** 2;
  console.log(`The area for a circle with a radius of ${radius} is ${area}`);
  return area;
};
areaOfCircle(1);

// Write a function that will take one argument (a number) and perform the following operations,
//using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const allPreviousExamples = function (number) {
  const half = halfNumber(number);
  const square = squareNumber(half);
  const circleArea = areaOfCircle(square);
  const final = percentOf(square,circleArea);
};
allPreviousExamples(10);


// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars',
// except it will add '(pinky)' at the end if the amount is 1 million. For example:

  // DrEvil(10): 10 dollars
  // DrEvil(1000000): 1000000 dollars (pinky)

  const DrEvil = function (amount) {
    if (amount === 1000000) {
      console.log(`${ amount } dollars (pinky)`)
      ;
    } else {
      console.log(`${ amount } dollars`);
    }
  };

  DrEvil(10000);

  // Create a function called mixUp. It should take in two strings, and return the concatenation of
  // the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
  // You can assume that the strings are at least 2 characters long. For example:
  // mixUp('mix', pod'): 'pox mid'
  // mixUp('dog', 'dinner'): 'dig donner'
  //Look up the JavaScript string reference to find methods which may be useful!

  const mixUp = function (wordOne, wordTwo) {
    return wordTwo.slice(0,2) + wordOne.slice(2) + " " + wordOne.slice(0,2) + wordTwo.slice(2);
  };
  console.log(mixUp('cat','dog'));


// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of
// its first character have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'

const fixStart = function (word) {
  return
};


// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5 or 7 as a factor, output the number as a string.
// Examples
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

// const findFactor = function (number) {
//   if (number % 3 === 0) {
//     console.log('Pling');
//   } else if (number % 5 === 0) {
//     console.log('Plang');
//   } else if (number % 7 === 0) {
//     console.log('Plong')
//   } else {
//     console.log(`Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward ${number}`);
//   }; // This won't work as only the first condition will be checked instead of the full code.
// };
//
// findFactor(60537);

// const findFactor = function (number) {
//   if (number % 3 === 0) {
//     console.log('Pling');
//   }
//   if (number % 5 === 0) {
//     console.log('Plang');
//   }
//   if (number % 7 === 0) {
//     console.log('Plong')
//   }
// };
//
// findFactor(15);

const raindrops = function (number) {
  const output = '';
  if (number % 3 === 0) {
     output = output + 'Pling';
  }
  if (number % 5 === 0) {
     output = output + 'Plong';
  }
  if (number % 7 === 0) {
    output = output + 'Plong';
  }
  if (output.length === 0) {
    //output = number.toString(); // convert a number to a string
    output = number + '';
  }
return output;
}
console.log(raindrops(105));
