// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num1, num2) {
  if(num1 > num2) {
    return console.log(num1 + " is the larger number");
  }else {
    return console.log(num2 + " is the larger number");
  }
}

maxOfTwoNumbers(5, 10);
maxOfTwoNumbers(23, 7);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num1, num2, num3) {
  return console.log(Math.max(num1, num2, num3) + " is the largest number");
}

maxOfThree(3, 10, 6);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowels = ['a','e','i','o','u'];

const isVowel = function(char){

  for(let i = 0; i < vowels.length; i++){

    if(char === vowels[i]){
      return true;
    }
  }
  return false;
}

const message = "vowel? ";
console.log(message + isVowel('i'));
console.log(message + isVowel('u'));
console.log(message + isVowel('g'));
console.log(message + isVowel('z'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log("The sum is " + sum);
}

const multiplyArray = function(arr){
  let result = arr[0];
  for(let i = 1; i < arr.length; i++){
    result *= arr[i];
  }
  console.log("The result of multiplying is " + result);
}

sumArray([1,2,3,4,5,6]);
multiplyArray([1,2,3,4,5,6]);
multiplyArray([32,42,10,15]);

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string){
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  console.log(joinArray);
}

reverseString("jag testar");
reverseString("fantastic");

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function(arr){
  let indexOfLongest = 0;
  let wordCount = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > wordCount){
      wordCount = arr[i].length;
      indexOfLongest = i;
    }
  }
  console.log("The longest word is word number " + (indexOfLongest + 1) + " : " + arr[indexOfLongest] );
}

  findLongestWord(['hi', 'hello', 'wonderful', 'sunny']);


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function(arr, num){

  let longWordsOnlyClub =[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > num){
      longWordsOnlyClub.push(arr[i]);
    }
  }
  console.log(longWordsOnlyClub);
}

filterLongWords(['hello', 'hi', 'sleepy', 'lights', 'random'],5);
