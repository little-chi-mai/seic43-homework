
// // Array and Functions Bonus Material
// // Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// // Use the if-then-else construct available in Javascript. You'll have to remember your pre-work,
// // or do some googling to figure this out.
//
const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(maxOfTwoNumbers(4,6));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
  const max = Math.max(num1, num2, num3);
  return max;
};
console.log(maxOfThree(37,1,32));

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowel = function (letter) {
    const theVowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < letter.length; i++){
      if(theVowels === letter[i]){
      return true;
    } else
      return false;
    };
};
console.log(vowel("a"));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
// and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total = (total + numbers[i]);
	}
	return total;
}
console.log(sumArray([1,2,3,4]));

const multiplyArray = function (numbers) {
	let total = 1;
	for (let i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
console.log(multiplyArray([1,2,3,4]));


// Bonus

// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
    let text = '';
    for (let i = string.length - 1; i >= 0; i--) {
    text = ( text + string[i] );
    }
    return text.toLowerCase();
}
console.log(reverseString("holiday"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function (str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength.push(words[i]);
    }
  }
  return maxLength;
}
console.log(findLongestWord("Don't stop believing hold on to that feeling"));

// Write a function filterLongWords that takes an array of words and an number i and returns
// the array of words that are longer than i.
