console.log("hello world");

/* 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out. */
const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};
console.log(`The large number is ${maxOfTwoNumbers(1, 2)}`);


/* 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. */

const maxOfThree = function (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
};
console.log(`The large number is ${maxOfThree(1, 2, 3)}`);



/* 3.Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

const vowel = function (char) {
    if ((char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u")) {
        return true;
    } else {
        return false;
    }
}
console.log(vowel("a"));
console.log(vowel("e"));
console.log(vowel("i"));
console.log(vowel("o"));
console.log(vowel("u"));
console.log(vowel("b"));



/* 4.Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. */

const sumArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}


const multiplyArray = function (arr) {
    let multip = 1;
    for (let i = 0; i < arr.length; i++) {
        multip = multip * arr[i];
    }
    return multip
}

console.log(`for Array [1,2,3,4] Sums is ${sumArray([1, 2, 3, 4])}, Multiply is ${multiplyArray([1, 2, 3, 4])}`);


/* 5.Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
 */

const reverseString = function (str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i];
    }
    return revStr
};
console.log(reverseString("ag testar"));






/* 6.Write a function findLongestWord that takes an array of words and returns the length of the longest one. */

const findLongestWord = function (arr) {
    let maxNum = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxNum) {
            maxNum = arr[i].length;
        }
    }
    return maxNum;
}
console.log(`the length of the longest one in array ["hello", "a", "bb", "cc", "ffffffff"] is ${findLongestWord(["hello", "a", "bb", "cc", "ffffffff"])}`);


/* 7.Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i. */

const filterLongWords = function (arr, i) {
    let newArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length > i) {
            newArr.push(arr[j]);
        }
    }
    return newArr;
};
console.log(`the array ["hello", "a", "bb", "cc", "ffffffff"] has [${filterLongWords(["hello", "aaaaaa", "bb", "cc", "ffffffff"], 3)}] whcih words length is longer than 3`);