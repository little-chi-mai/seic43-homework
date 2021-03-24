// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = (num1, num2) => {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(5, 7));


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = (num1, num2, num3) => {
    const arr = [num1, num2, num3];
    let highest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= highest) {
            highest = arr[i];
        }
    }
    return highest;
}
console.log(maxOfThree(15, 56, 7));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = (char) => {
    if (char.match(/^[aeiou]/i) && char.length === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel('a'));
console.log(isVowel('aaa'));
console.log(isVowel('w'));



// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const multiplyArray = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}

console.log(sumArray([1, 2, 3, 4]));
console.log(multiplyArray([1, 2, 3, 4]));


// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseString("jag testar"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = (arr) => {
    const arrWordLength = [];
    for (let i = 0; i < arr.length; i++) {
        arrWordLength.push(arr[i].length);
    }
    return Math.max(...arrWordLength);
}

console.log(findLongestWord(['abc','a','abcde']));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = (arr,i) => {
    const arrWordLongerThanI = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length>i) {
            arrWordLongerThanI.push(arr[j]);
        }
    }
    return arrWordLongerThanI;
}

console.log(filterLongWords(['abc','a','abcde','abcdefgh'],3));