console.log("Hello Arrays new");
console.log("  "); //give the work some space

// Array and Function Bonus

// Problem 1
const maxOfTwoNumbers = function(num1, num2){
  if(num1 > num2){return `${num1} is bigger than ${num2}`}
  else {return `${num2} is bigger than ${num1}`}
}
console.log(maxOfTwoNumbers(50,100));

// Problem 2
function getMaxOfArray(num1, num2, num3) {
  if( (num1 > num2) && (num1 > num3) ) {return `${num1} is the largest number`}
    else if (num2 > num3){return `${num2} is the biggest`}
      else {return `${num3} is the biggest`}
}
console.log(getMaxOfArray(1, 4, 5));

// Problem 3
const isVowel = function(letter){
  let maybeVowel = letter
  if (maybeVowel == ("a" || "e" || "i" || "o" || "u")) {return "true"}
  else{return "false"};
}
console.log(isVowel("z"));

// Problem 4
let sumArray = function(array){
  let add = 0;
   for (i=0; i < array.length; i++) {
       add = (add + array[i]);
   }
return add;
}
console.log(sumArray([1, 1]))
let multiplyArray = function(array){
  let multiply = 1;
   for (i=0; i < array.length; i++) {
       multiply = (multiply * array[i]);
   }
return multiply;
}
console.log(multiplyArray( [10, 10] )  );

// Problem 5
let reverseString = function(reverseString){
let newString = "";

  for (let i = reverseString.length - 1; i >= 0; i--){
    newString = newString + reverseString[i];
  }
  return newString;
}
console.log(reverseString("reverse this string"));

// Problem 6
let longestWord = function(array){

  let longWord = "a";

   for (i = 0; i < array.length; i++) {
     if (array[i].length > longWord.length){
       longWord = array[i]}
        }

return longWord;
}
console.log(longestWord(["food", "longassword", "dog", "cat"]));

// Problem 7
let filterLongWords = function (number, array){
  let filteredWords = [""];

  for (i = 0; i < array.length; i++) {
    if (array[i].length >= number){
      filteredWords = filteredWords + " " + array[i];
    }
  }
  return filteredWords;
}
console.log(filterLongWords(5, ["Blue", "Yellow", "Red", "Orange", "Purple", "Green"]));
