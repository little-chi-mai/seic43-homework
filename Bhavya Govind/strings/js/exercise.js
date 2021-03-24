// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
//
const DrEvil = function amount(money){
  if (money < 1000000){
   console.log(`${ money } dollars`);
 }else{
   console.log(`${ money } dollars (pinky)`);
 }
}
DrEvil(100);
DrEvil(23400000);

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
//
const mixUpFunc = function mixUp(x,y){
 const f2Char = x.slice(0,2);
 const s2Char = y.slice(0,2);
 const result = `${x.replace(f2Char,s2Char)} ${y.replace(s2Char,f2Char)}`;

  console.log(result);

}
mixUpFunc('mix', 'pod');
mixUpFunc('dog', 'dinner');
// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
//
const fixStartFunc = function fixStart(x){
  let result = x[0];
  for(let i = 1 ; i < x.length ; i++){
    if (x[0] === x [i]){
      result = result + '*';
    }
    else{
      result = result + x[i];
    }
  }
  console.log(result);
}
fixStartFunc('babble');
// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
//
function verbing(verb){
 const verbing = verb.substring(verb.length - 3);
    if(verb.length > 3 && verbing === `ing`){
      verb = verb + `ly`;
    }else if(verb.length > 3){
      verb = verb + `ing`;
    }
    console.log(verb);
}
verbing(`drowning`);
// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
function notBad(str){
  let result = str;
  const x = 'not';
  const y = 'bad';
  const position1 = result.indexOf(x);
  const position2 = result.indexOf(y);

    if(result.includes(x) && result.includes(y) && (position1 < position2)){
          console.log(`positions ${position1} ${position2}`);
          result = str.replace(/not.*bad/, 'good');
    }
  console.log(result);
}
notBad('This movie is not so bad!');
