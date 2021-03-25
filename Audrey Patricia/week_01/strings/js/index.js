
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const DrEvil = function(amount){
  if(amount<1000000){
    return amount + " dollars";
  }else{
    return amount + " dollars (pinky)";
  }
}

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function(string1, string2){
  //slicing the first 2 characters of each string
  const string1Slice = string1.slice(0,2);
  const string2Slice = string2.slice(0,2);

//swapping the first 2 characters of each string
  string1 = string1.replace(string1Slice, string2Slice);
  string2 = string2.replace(string2Slice, string1Slice);

//return concatenation of 2 strings
  return string1 + " " + string2;
}

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixedStart = function(string){
  const char = string[0];

//loop through each character on the string
  for(let i = 1; i < string.length ; i++ ){
    //if the current char is equal to the first char of the string then take whatever is in front of that (beginning) and what is behind that character (end) in slices
    //add * to this character position and concatenate the 3 slices
    if(string[i] == char){
      let beginning = string.slice(0, i);
      let ending = string.slice(i+1, string.length);
      string = beginning + "*" + ending;
    }
  }

  return string;

}


// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function(str){
  if(str.length >= 3 && str.slice(str.length - 3, str.length) != "ing"){
    return str + "ing";
  }else if(str.length >= 3 && str.slice(str.length - 3, str.length) == "ing" ){
    return str + "ly";
  }else{
    return str;
  }
}

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

const notBad = function(str){
  const notPos = str.search("not");
  const badPos = str.search("bad");

  if(badPos > notPos && notPos > -1 && badPos > -1 ){
    const front = str.slice(0, notPos);
    const end = str.substring(badPos + 3)

    return front + " good " + end;

  }else{

    return str;
  }
}
