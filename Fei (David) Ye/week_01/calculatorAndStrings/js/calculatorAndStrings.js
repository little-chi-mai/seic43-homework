
// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = (num) => {
    const squareNum = num * num;
    return `The result of squaring the number ${num} is ${squareNum}.`;
}

console.log(squareNumber(3));

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = (num) => {
    const halfNum = num / 2;
    return `Half of ${num} is ${halfNum}.`;
}

console.log(halfNumber(5));

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = (firstNum, secondNum) => {
    const percentage = firstNum / secondNum * 100;
    return `${firstNum} is ${percentage}% of ${secondNum}.`;
}

percentOf(2, 5);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = (radius) => {
    const area = radius * radius * Math.PI;
    return `The area for a circle with radius ${radius} is ${area}.`;
}

console.log(areaOfCircle(2));

// - Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircleRounding = (radius) => {
    const area = radius * radius * Math.PI;
    const roundingArea = Math.round(area * 100) / 100;
    return `The area for a circle with radius ${radius} is ${roundingArea}.`;
}

console.log(areaOfCircleRounding(2));


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).


const calculator = () => {
    const num = prompt("Please enter the number you want to calculate") - 0;

    const choice = prompt(
        `Which of the following calculation you want to perform?
    1. Calculate half of the number
    2. Square the number
    3. Take the number as circle radius and calculate the area
    4. Calcuate what percentage the area is of the squared result`
    );

    switch (choice) {
        case '1':
            console.log(halfNumber(num)+" <=== Let's calculate!");
            break;
        case '2':
            console.log(squareNumber(num)+" <=== Let's calculate!");
            break;
        case '3':
            console.log(areaOfCircle(num)+" <=== Let's calculate!");
            break;
        case '4':
            console.log(`The percentage the area is ${Math.round(Math.PI * 100)}% of the squared result`+" <=== Let's calculate!")
            break;
        default:
            console.log("Not a valid choice, please choose between 1~4"+" <=== Let's calculate!")
            break;
    }
}

document.querySelector('button').onclick = calculator;



// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const DrEvil = (num) => {
    if (typeof (num) === `number`) {
        if (num === 1000000) {
            return `1000000 dollars (pinky)`;
        } else {
            return `${num} dolloars`;
        }
    } else {
        return `Please enter a number`;
    }
}

console.log(DrEvil(10));
console.log(DrEvil(1000000));
console.log(DrEvil('try'));


// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = (str1, str2) => {

    const firstTwoChar = (str) => {
        return str.split("")
            .slice(0, 2)
            .join("");
    }

    const theOtherChars = (str) => {
        return str.split("")
            .slice(2,)
            .join("");
    }

    if (str1.length >= 2 && str2.length >= 2) {
        return firstTwoChar(str2) + theOtherChars(str1) + ' ' + firstTwoChar(str1) + theOtherChars(str2);
    } else {
        return `Input error, please enter 2 strings both longer than 2 characters.`
    }
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));


// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = (str) => {
    const firstChar = str[0];
    const mutatedOtherChar = str.split("")
        .slice(1,)
        .map(char => {
            if (char === str[0]) {
                return '*';
            }
            else {
                return char;
            }
        })
        .join("");
    return firstChar + mutatedOtherChar;
}

console.log(fixStart('babble'));

// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = (str) => {
    const strArr = str.split("");
    const lastThreeChar = strArr.slice(strArr.length - 3,)
        .join("");
    if (strArr.length < 3) {
        return str;
    } else {
        if (lastThreeChar === "ing") {
            return strArr.join('') + 'ly';
        } else {
            return strArr.join('') + 'ing';
        }
    }
}

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));


// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const notBad = (str) => {
    const strArr = str.split(' ');
    const lastWordArr=strArr[strArr.length-1].split('');
    const lastWord=lastWordArr.slice(0,lastWordArr.length-1).join('');
    strArr.pop();
    strArr.push(lastWord);
    const indexOfNot = strArr.indexOf('not');
    const indexOfBad = strArr.indexOf('bad');
    if (indexOfNot===-1 || indexOfBad===-1 || indexOfNot>indexOfBad) {
        return str;
    } else {
        for (let index = indexOfBad; index >= indexOfNot; index--) {
            strArr.splice(index,1);
        }
        return strArr.join(" ") + ' good!';
    }
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
















