
// Array and Functions Bonus Material:

//1.
const maxOfTwoNumbers = function (a, b){
  const message = "The biggest number is ";
    if (a > b){
      console.log(`${ message } ${ a }.`);
      return a;
    } else {
      console.log(`${ message } ${ b }.`);
      return b;
    }
 };
maxOfTwoNumbers(4,5);

 //2.
 const maxOfThreeNumbers = function (a, b, c){
   const message = "The biggest number is "
     if (a > b && a > c){
       return a;
       console.log(`${ message } ${ a }.`);
     } else  if (b > a && b > c){
       console.log(`${ message } ${ b }.`);
       return b;
     } else if (c > a && c > b){
       console.log(`${ message } ${ c }.`);
       return c;
     }
  };
maxOfThreeNumbers(4,7,5);

//JOEL VERSION - shared on Slack
  // Cute maxOfThree defined using maxOfTwo:
  // const maxOfThree = function (a, b, c) {
  //   return maxOfTwo( maxOfTwo(a, b), maxOfTwo(b, c) );
  // }

//3.
const isAVowel = function (oneStringChar){
  const vowels = ['a','e','i','o','u'];
  for(let i = 0; i < vowels.length; i++)
  if(oneStringChar === vowels[i]){
    console.log(`${ oneStringChar } is a vowel.`)
    return true;
  } else {
    console.log(`${ oneStringChar } is not a vowel.`)
    return false;
  }
}
isAVowel('f');

//4.
const sumArray = function(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  console.log("The sum is " + sum);
}
sumArray([4,6,2,8]);

const multiplyArray = function(array){
  let result = array[0];
  for(let i = 1; i < array.length; i++){
    result *= array[i];
  }
  console.log("The result of multiplying is " + result);
}
multiplyArray([6,2,2]);
multiplyArray([2,2,2,2,2,2,2,2]);

// Bonus
// Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string){
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  console.log(joinArray);
}

reverseString("spag bowl");
reverseString("woohoo");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function(array){
  let index = 0;
  let wordCount = 0;

  for(let i = 0; i < array.length; i++) {
    if(array[i].length > wordCount){
      wordCount = array[i].length;
      index = i;
    }
  }
  console.log("The longest word is word number " + (index + 1) + " : " + array[index] );
}

  findLongestWord(['Yo', 'pasta', 'Integrity', 'Yugoslavia']);

// Write a function filterLongWords that takes an array of words and an number i and returns
//the array of words that are longer than i.

const filterLongWords = function(arr, num){

  let longWords =[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > num){
      longWords.push(arr[i]);
    }
  }
  console.log(`The words containing more than ${ num } letters are: ${ longWords }`);
}

filterLongWords(['Yo', 'ants', 'spaghetti', 'javascript', 'tired'],4);
