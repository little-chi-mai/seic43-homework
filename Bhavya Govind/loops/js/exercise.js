
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascript. You'll have to remember your pre-work,
//or do some googling to figure this out.


const maxOfTwoNumbers = function(x,y){
  if(x > y){
    return x;
  }
  return y;
}
console.log(`max of 21 and 39 is ${ maxOfTwoNumbers(21,39)}`)

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThreeNumbers = function (x,y,z){
  if ( x > y && x > z ){
    return x;
  }else if( y > x && y > z){
    return y;
  }else if( z > x && z > y){
    return z;
  }
}
maxOfThreeNumbers(4,9,1);
// Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.

const vowelsFunc = function(letter){
  const vowels = ['a','e','i','o','u'];
  for (let i = 0; i < vowels.length; i++){
    if (letter.toLowerCase() === vowels[i]){
      return true
    }
    return false
  }
}
vowelsFunc('W');
// Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
 const sumArray = function (x) {
   let sum = 0;
   for (let i = 0; i < x.length; i++){
     sum = sum + x[i];
   }
   return sum;
 }
 sumArray([2,4,7,8])
 const multiplyArray = function (x){
   let result = 1;
   for (let i = 0; i < x.length; i++){
     result = result * x[i];
   }
   return result;
 }
console.log(`multiplication of [1,2,3,4] ${multiplyArray([1,2,3,4])}`);

// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".


    const reverseString = function(str){
    let reversedStr = "";
    for(let i = str.length - 1; i >= 0; i--){
             reversedStr = reversedStr + str[i];
         }
     return reversedStr;
    }

    console.log(`reverse of a string bhavya is ${reverseString(`bhavya`)}`);
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
   const longestWord = function (arr){
     let longestLen;
     for (let i = 0; i < arr.length - 1; i++){
       if (arr[i].length > arr[i +1].length){
         longestLen = arr[i].length;
       }else{
         longestLen = arr[i+1];
       }
     }
     return longestLen;
   }
   console.log(`longest lenth in bhavya,bhav,santhosh,govind is ${longestWord([`bhavya`,`bhav`,`santhosh`,`govind`])}`);



//Write a function filterLongWords that takes an array of words and an number i
//and returns the array of words that are longer than i.

const filterLongWords = function (arr,num){
  let output = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i].length > num){
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(`filteredlong words in  bhavya,bhav,santhosh,govind is ${filterLongWords([`bhavya`,`bhav`,`santhosh`,`govind`],5)}`);
