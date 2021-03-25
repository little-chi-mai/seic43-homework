//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (x, y) {
  if (x > y){
    return x;
  }
  else {
    return y;
  }
}
 maxOfTwoNumbers ();

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
 const maxOfThree = function(a, b, c) {
   if ( a > b && a > c) {
     return a;
   }
   else if ( b > c && b > a) {
     return b;
   }
   else {
     return c
   }
 }

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
/*const checkIfVowels = function (z) {
if ( z === 'a' || z === 'e' || z === 'i' || z === '0' || z === 'u') {
  return true;
}
else {
  return false;
} */
const checkIfVowels = function (z) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let isVowel = false;
  for ( let i = 0; i < vowels.length; i++){
    if ( z === vowels[i] ){
      isVowel = true;
      break;
    }
  }
  return isVowel;
}

 checkIfVowels();

 //Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  const arrayOfNumber = [2, 4, 6, 8];
  const sumArray = function() {
    let sum = 0;
    for (let i = 0; i < arrayOfNumber.length; i++){
        sum = sum + arrayOfNumber[i]
      }
      return sum;
    }
  sumArray();

//multiplication
  const arrayOfNum = [2, 4, 6, 8];
  const multiplyArray = function() {
  let multiplication = 1;
    for (let i = 0; i < arrayOfNum.length; i++){

        multiplication = multiplication * arrayOfNum[i];
      }
      return multiplication;
  }

  multiplyArray();

//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

  const reverseString = function (a) {
  let words = a.split('');
  words.reverse();
  return words.join('');
}

reverseString('My name');

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function() {
let longestWord = 0;
const food = ['pizza', 'hotdog', 'burger', 'sandwich'];
  for (let i = 0; i < food.length; i++){
  //  const longestWordOfFood
   if ((food[i].length) > longestWord ){
     longestWordOfFood = food[i]
   }
  }
  return longestWordOfFood;
}
findLongestWord();

//Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const mixedArray = ['India', 'China', 'Italy', 'America'];
const filterLongWords = function( a, b ) {
    let arrayOfWords = [];
    for(let i = 0; i < mixedArray.length; i++){
    if (mixedArray[i].length > b){
      arrayOfWords.push(mixedArray[i]);
    }
  }
return arrayOfWords;
}
filterLongWords(mixedArray, 3);
