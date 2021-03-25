//Create a function called DrEvil. It should take a single argument, an amount, and return
//' dollars', except it will add '(pinky)' at the end if the amount is 1 million.

const drEvil = function (amount){

  const outputString = `${amount} dollars`;

  if (amount !== 1000000){
    return outputString;
  } else {
    return outputString + ' (pinky)';
  }
}

console.log(drEvil(50));
console.log(drEvil(1000000));

//Create a function called mixUp. It should take in two strings, and return the concatenation of the
//two strings (separated by a space) slicing out and swapping the first 2 characters of each. You
//can assume that the strings are at least 2 characters long.

const mixUp = function (string1, string2){
  const firstTwo1 = mixLetters(string1.slice(0, 2));
  const firstTwo2 = mixLetters(string2.slice(0, 2));
  return firstTwo1 + " " + firstTwo2;
}

const mixLetters = function (string){
  return string.split("").reverse().join("");
}

console.log(mixUp ('Alex', 'Faith'));

//Create a function called fixStart. It should take a single argument, a string, and return a version
//where all occurences of its first character have been replaced with '*', except for the first character
//itself. You can assume that the string is at least one character long.

const fixStart = function(string){
  const firstChar = string.charAt(0);
  return firstChar + string.slice(1).replaceAll(firstChar, "*");

}

console.log(fixStart ('babble'));

//Create a function called verbing. It should take a single argument, a string. If its length is at
//least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should
//add 'ly' instead. If the string length is less than 3, it should leave it unchanged.

const verbing = function (string){

  const lastLet = string.charAt(string.length-1);
  const secondLastLet = string.charAt(string.length-2);

  if(string.length>=3){
    if(string.slice(-3)==='ing'){
      return string + 'ly';
    } else {
      if (string.endsWith('e')===true){ // works i.e. with dance
        return string.slice(0,-1) + 'ing'
      }
      else if (isVowel(lastLet) === false && isVowel(secondLastLet) === true){
        if(string.length>7){
          return string + 'ing';
        } else{
           return string + lastLet + 'ing';
        }
      }
      return string + 'ing';
    }
  } else if (string.length <3){
    return string;
  }
}

const isVowel = function(char) {
  if (char.length == 1) {
    const vowels = new Array("a", "e", "i", "o", "u");
    let isVowel = false;

    for (e in vowels) {
      if (vowels[e] == char) {
        isVowel = true;
      }
    }

    return isVowel;
  }
}

console.log(verbing('begin'));
console.log(verbing('remember'))
console.log(verbing ('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

//Create a function called notBad that takes a single argument, a string.
//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function (string){
  if (string.includes('not') && string.includes('bad')){
    if (string.indexOf('not') < string.indexOf('bad')){
      return string.slice(0,string.indexOf('not')) + 'good';
    } else{
      return string
    }
  } else {
    return "original string doesn't contain not bad"
  }
}

console.log(notBad('this is not so bad'));
console.log(notBad('bad this is not so'));
console.log(notBad('actually this sucks'));
