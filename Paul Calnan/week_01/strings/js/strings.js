// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
const drEvil = function(amount) {

  if (amount <= 999999) {
    return (`${amount} dollars`);
  } else {
    return (`${amount} dollars (pinky)`);
  }
  return drEvil;
};

console.log(drEvil(23423));
console.log(drEvil(2000000));

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
const mixUp = function(a, b) {
  let str1First2 = a.substring(0, 2);
  let str2First2 = b.substring(0, 2);
  let slice1 = a.slice(2);
  let slice2 = b.slice(2);
  let result = (`${str1First2+slice2} ${str2First2+slice1}`);

  return result;
};

console.log(mixUp('fix', 'car'));
console.log(mixUp('song', 'clap'));

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
const fixStart = function(param) {
  let strFirstCharacter = param.charAt(0);
  let replace = param.replaceAll(strFirstCharacter, '*');
  let cutFirst = replace.slice(1);
  let putBackFirst = (`${strFirstCharacter}${cutFirst}`);

  return putBackFirst;
};

console.log(fixStart('scissors'));
console.log(fixStart('babble'));

// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
const verbing = function(str) {

  let length = str.length;
  let last3 = str.substr(str.length - 3);

  if ((length > 3) && (last3 === 'ing' )) {
    return (`${str}ly`);
  } else if ((length > 3) && (last3 !== 'ing')) {
    return (`${str}ing`);
  } else {
    return (`${str}`);
  }
};

console.log('cat');
console.log(verbing('fish'));
console.log(verbing('fishing'));

// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
const notBad = function(str) {
  let start = str.search('not');
  let stop = str.search('bad') + 2;

  if (str.includes('not') && str.includes('bad') && start < stop) {
    let tail = str.slice(stop + 1);
    let changed = str.replace('not', 'good');
    let trimmed = str.substring(0, start) + 'good' + tail;
    return trimmed;
  } else {
    return str;
  }
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
