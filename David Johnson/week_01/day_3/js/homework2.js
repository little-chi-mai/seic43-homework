//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascript.
//You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
    return num1;
  } else {
    console.log(num2);
    return num2;
  }
}

maxOfTwoNumbers(5, 10);

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
  let highestNum = num1;
  if (num1 < num2 && num2 > num3) {
    highestNum = num2;
    return highestNum;
  } else if (num1 < num3 && num3 > num2)
    highestNum = num3;
    return highestNum;
}

console.log(maxOfThree(1,2,3));

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelsPresent = function (letter) {

  let trueOrFalse = true

  aPresent = letter.search("a");
  ePresent = letter.search("e");
  iPresent = letter.search("i");
  oPresent = letter.search("o");
  uPresent = letter.search("u");

  if (aPresent === -1 && ePresent === -1 && iPresent === -1 && oPresent === -1 && uPresent === -1) {
    trueOrFalse = false;
  }
  return trueOrFalse;
}

console.log(vowelsPresent("a"));

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (array) {
  let total = null;
  for (let i=0; i<array.length; i++) {
    total = total + array[i];
  }
  return total;
}

const multiplyArray = function (array) {
  let total = array[0];
  for (let j = 0; j<(array.length-1); j++) { //need to set the limiter to j<array.length-1 so that we don't index into undefined parts of the array.
    total = total * array[j+1];
  }
  return total
}

const numbers = [1, 1, 1, 2]
console.log(sumArray(numbers));
console.log(multiplyArray(numbers));

//Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string) {
  let reversedWord = "";
  for (i=string.length-1; i>=0; i--) {
    reversedWord = reversedWord + string[i];
  }
  return(reversedWord);
}
console.log(reverseString("hello"));

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function (array) {

  const arrayLength = array.length;
  let longestWord = array[0];

  for (i=0; i<arrayLength; i++) {
    if ((array[i].length) > (longestWord.length)) {
    longestWord = array[i];
    }
  }
  return longestWord;
  }
console.log(findLongestWord(arrayOfWords = ["Hello", "Bonjour", "Hola"]));

//Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const filterLongWords = function (array, i) {

  let wordsToPrint = [];

  for (let j=0; j<array.length; j++) {
    if ((array[j].length) > i) {
      wordsToPrint.push(array[j]);
    }
  }
  return wordsToPrint;
}

console.log(filterLongWords(["cat", "bike", "bicycle"], 3));
