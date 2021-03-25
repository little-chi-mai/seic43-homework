// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
  if (a < b) {
    console.log(`${ b } is greater than ${ a }`)
    return a;
  } else {
    console.log(`${ a } is greater than ${ b }`)
    return b;
  }

};

maxOfTwoNumbers(8, 4);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(a, b, c) {
  result = Math.max(a, b, c);
  return result;
};

console.log(maxOfThree(1, 2, 3));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelCheck = function(v) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < vowels.length; i++) {
      if (v != vowels[i]) {
        return false;
      } else {
        return true;
      }
    }
};

console.log(vowelCheck('f'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function(numbers) {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total = (total + numbers[i]);
  }
  return total;
};
console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function(numbers) {
  let total = 1; // <- tricked me for a bit - 
  for (i = 0; i < numbers.length; i++) {
    total = (total * numbers[i]);
  }
  return total;
};

console.log(multiplyArray([1, 2, 3, 4]));
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(string) {
  let reversed = '';
  for (i = string.length - 1; i > 0; i--) {
    //console.log(i); to prove minus 1 because of difference between string length start(1) and array index start(0)
    reversed = (reversed + string[i]);
  }
  return reversed;
};

console.log(reverseString('jag testar'));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(str) {

  let longestWord = 0;
  let words = str.split(' '); // Why a space needed here?

  for (i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
};

console.log(findLongestWord('Javascript is an abomination'));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function(str, num) {

  let words = str.split(' '); // Why a space needed here?
  let longestWords = [];

  for (i = 0; i < words.length; i++) {
    if (words[i].length > num) {
      longestWords[longestWords.length] = words[i];
    }
  }
  return longestWords;
};

console.log(filterLongWords('I like to Kazoo', 3));
