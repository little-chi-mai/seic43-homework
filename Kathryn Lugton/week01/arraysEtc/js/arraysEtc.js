
// Array and Functions Bonus Material:

//1.
const maxOfTwoNumbers = function (a, b){
    if (a > b){
      return a;
    } else {
      return b;
    }
 };
 //2.
 const maxOfThreeNumbers = function (a, b, c){
     if (a > b && a > c){
       return a;
     } else  if (b > a && b > c){
       return b;
     } else if (c > a && c > b){
       return c;
     }
  };

//3.
const isAVowel = function (oneStringChar){
  const vowels = ['a','e','i','o','u'];
  for(let i = 0; i<vowels.length;i++)
  if(oneStringChar === vowels[i]){
    return true;
  } else {
    return false;
  }
}
//4.
// Define a function sumArray and a function multiplyArray that sums and multiplies
//(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should return 24.

///MIA - I'm stuck on how to pass an array in here? I didn't get to the string stuff the day before either.
//I'll go over it all on the weekend 
const sumArray = function(input) {
  const array = [];
 for (let i = 0; i < array.length; i++){
     for (let j = 1 ; j<= array.length; j++)
       return i + j;
   }
 }
//
// const multiplyArray = function (arrayofNums) {
//
//
//
// }



// Bonus
// Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.


// Write a function filterLongWords that takes an array of words and an number i and returns
//the array of words that are longer than i.
