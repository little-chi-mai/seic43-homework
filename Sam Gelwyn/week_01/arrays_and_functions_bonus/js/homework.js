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

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num1, num2, num3) {
  return console.log(Math.max(num1, num2, num3) + " is the largest number");
}

maxOfThree(1, 10, 100);

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
console.log(message + isVowel('p'));
console.log(message + isVowel('u'));
console.log(message + isVowel('s'));
console.log(message + isVowel('a'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const someNumbers = [ 1,2,3,4 ]
const sumArray = function(){
  console.log(
    someNumbers.reduce((a, b) => a + b, 0)
    )
};

const multiplyArray = function(){
  console.log(
    someNumbers.reduce((a, b) => a * b,)
    )
};

sumArray();
multiplyArray();  


//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
