//Create a function called DrEvil.
//It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
//For example:
//DrEvil(10): 10 dollars
//DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (dollars) {
  if (dollars != 1000000) {
    console.log(`${dollars} dollars`);
  } else {
    console.log(`${dollars} dollars pinky`);
  }
}
DrEvil(10);
DrEvil(1000000);

//Create a function called mixUp.
//It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
//You can assume that the strings are at least 2 characters long. For example:

const mixUp = function (word1, word2) {
  //get the first two letters of the first word
  const w11stLetter = (word1.charAt(0));
  const w12ndLetter = (word1.charAt(1));
  const w11st2Letters = (w11stLetter + w12ndLetter);

  //get the first two letters of the second word
  const w21stLetter = (word2.charAt(0));
  const w22ndLetter = (word2.charAt(1));
  const w21st2Letters = (w21stLetter + w22ndLetter);

  //get the length of both words
  const word1Length = word1.length;
  const word2Length = word2.length;

  //spell out word 1 without it's first two characters

  let endOfWord1 = null;
  for (i=2; i<word1.length; i++) {
    if (i === 2) {
        endOfWord1 = word1.charAt(i)
    } else {
      endOfWord1 = endOfWord1 + word1.charAt(i);
    }
  }
  //spell out word 2 without it's first two characters
  for (i=2; i<word2.length; i++) {
    if (i === 2) {
        endOfWord2 = word2.charAt(i);
    } else {
      endOfWord2 = endOfWord2 + word2.charAt(i);
    }
  }
  //concatenate the chopped up words together
  const finalMixUp = (`${w21st2Letters + endOfWord1} ${w11st2Letters + endOfWord2}`)
  console.log(finalMixUp);
  return finalMixUp;
}

mixUp("bob", "builder");

//Create a function called fixStart.
//It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself.
//You can assume that the string is at least one character long. For example:
//fixStart('babble'): 'ba**le'

const fixStart = function (word) {
  for (i=0; i<word.length; i++) {
    if (i===0) {
      printOut = word.charAt(i);
    } else if (word.charAt(i) === word.charAt(0)) {
      printOut = printOut + "*";
    } else {
      printOut = printOut + word.charAt(i);
    }
  }
  console.log(printOut);
  return printOut;
}
fixStart("babble")

//Create a function called verbing. It should take a single argument, a string.
//If its length is at least 3, it should add 'ing' to its end
//..unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged.

const verbing = function (word) {
  //calculate the length of the word
  wordLength = word.length;
  let finalWord = word;
  if (word.length > 2 && ((word.charAt(wordLength - 1) != "g") && (word.charAt(wordLength - 2) != "n") && (word.charAt(wordLength - 3) != "i")) ) {
    finalWord = (`${word}ing`);
  } else if ((word.charAt(wordLength - 1) == "g") && (word.charAt(wordLength - 2) == "n") && (word.charAt(wordLength - 3) == "i")) {
    finalWord = (`${word}ly`);
  } else {
    finalWord = finalWord;
  }
  console.log(finalWord);
  return(finalWord);
}
verbing("Swimming");

//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function (input) {
  //determine the location of the keywords
  var notLocation = input.search("not");
  var badLocation = input.search("bad");
  console.log(notLocation);
  console.log(badLocation);
  //determine the total length of the string
  stringLength = input.length;
  //conditionals
  if (badLocation > notLocation) {
    //delete the not - bad substring
    input =  input.slice(0, notLocation);
    input = input + "good";
    console.log(input);
    return input;
  } else if (notLocation===-1 && badLocation ===-1) { //the search function will return a value of -1 if the search word is not present.
    console.log(input);
    return input
  }
}

notBad("Dinner was not bad");
