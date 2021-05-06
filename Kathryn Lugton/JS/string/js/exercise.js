// DrEvil
const drEvil = function (amount) {
  if(amount >= 1000000){
  console.log(`${ amount } dollars (pinky)`);
} else {
  console.log(`${ amount } dollars`);
}
}
drEvil(9999999999999);

// MixUp
const mixUp = function(a,b) {
  const str1 = a.slice(0,2);
  const stra = a.slice(2);
  const str2 = b.slice(0,2);
  const strb = b.slice(2);
    console.log(`${ str1 + strb }  ${ str2 + stra }`);
}
mixUp("hippo","monkey");

//EXAMPLE OF SPLIT AND RETURN BACKWARDS
let str = "abcba";

function isPalindrome(str) {
  // split the string to array, reverse the array, then join the array with ''
  return str === str.split('').reverse().join('');
}
isPalindrome(str); // return true

//
// FixStart
// Create a function called fixStart. It should take a single argument, a string,
//and return a version where all occurences of its first character have been replaced
//with '*', except for the first character itself. You can assume that the string is
//at least one character long. For example:
// fixStart('babble'): 'ba**le'

const fixStart = function(a) {
  const first = a.slice(0,2);
  let second = a.slice(2,4);
  const third = a.slice(4);
  const alterSecond = (second = "**")
    console.log(`${ first}${second }${ third }`);
}
fixStart('Katie');


// Verbing
// Create a function called verbing. It should take a single argument, a string.
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.

const verbing = function(a) {
  if (a.length < 3) {
    console.log(a);
  }else if(a.length > 3 &&  ! a.includes("ing")) {
    console.log(a + "ing");
  } else if(a.length > 3 && a.includes("ing")) {
    console.log(a + "ly" );
 }
}
verbing('swim'); //to 'swimming';---- try make a condition to get a double 'mm'
verbing(`swimming`); //to 'swimingly;
verbing(`go`); //unchanged


// Not Bad
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good'
//and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// const notBad = function(string) {
//   const sentence = string;
//   if(sentence.includes("not") && sentenec.includes("bad")) {
//     sentence.replaceAll("not" + "bad", "good")
//     console.log(string);
//   } else {
//     console.log("positive");
//   }
// }
// notBad('This dinner is not that bad!'); // 'This dinner is good!'
// notBad('This movie is not so bad!'); // 'This movie is good!'
// notBad('This dinner is bad!'); // 'This dinner is bad!'
