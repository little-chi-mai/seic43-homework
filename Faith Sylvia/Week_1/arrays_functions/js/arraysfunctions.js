//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns
//the largest of them. Use the if-then-else construct available in Javascript. You'll
//have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1,num2){
  if(num1 > num2){
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNumbers(15,2));

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {

  let theBigOne;
  const numArray = [];

  if ( num1 > num2 ){
    numArray.push(num1);
  }else {
    numArray.push(num2);
  }

  if ( num2 > num3 ){
    numArray.push( num2 );
  } else{
    numArray.push( num3 );
  }

  if(numArray[ 0 ] > numArray[ 1 ]){
    theBigOne = numArray[0];
  } else{
    theBigOne = numArray[1];
  }

  return theBigOne;
}

altMaxOfThree = function (num1, num2, num3){ //an alternative way of solving the proplem
  const result = Math.max(num1, num2, num3);
  return result;
}

console.log(maxOfThree(18,21,9));
console.log(maxOfThree(21,19,9));
console.log(maxOfThree(17,21,32));

console.log(altMaxOfThree(100,1000,52));

//Write a function that takes a character (i.e. a string of length 1) and returns true
//if it is a vowel, false otherwise.

const vowelTester = function(char){
  const vowels = ['a','e','i','o','u']
  for (i=0; i<vowels.length; i++){
    if (vowel[i] === char){
      return true;
    }
  }
  return false;
}

console.log(vowelTester('o'));

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
//all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and
//multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (array){
  let value = null;
  for (i=0; i<array.length; i++){
    value = value + array[i];
  }
  return value;
}

const multArray = function (array){
  let value = 1;
  for (i=0; i<array.length; i++){
    value = value * array[i];
  }
  return value;
}

const myArray = [1,2,3,4];

console.log(sumArray(myArray), multArray(myArray));

//Define a function reverseString that computes the reversal of a string. For example,
//reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string){
  let newString = '';
  for (i=string.length-1; i >= 0; i--){
    newString = newString + string[i];
  }
  return newString;
}

console.log(reverseString('jag testar'))

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function(array){
  let longestWord = '';
  for (i=0; i < array.length; i++){
    if (array[i].length > longestWord.length){
      longestWord = array[i];
    }
  }
  return longestWord;
}

wordArray = ['pluto', 'Mars', 'Mercury', 'Saturn'];

console.log(findLongestWord(wordArray));

//Write a function filterLongWords that takes an array of words and an number i and returns the
//array of words that are longer than i.

const filterLongWords = function(array, i){
  const newArray = [];
  for (j=0; j < array.length; j++){
    if (array[j].length > i){
      newArray.push(array[j]);
    }
  }
  return newArray;
}

console.log(filterLongWords(wordArray,4));
