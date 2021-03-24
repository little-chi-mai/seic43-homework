console.log("Hello Strings");

// Dr Evil
const DrEvil = function(money){
  if(money === 1000000){return (`${money} dollars (pinky)`)}
    else{return `${money} dollars`;}
  }
console.log(DrEvil(1000000));

// Word Mixer
const mixedUp = function(word1, word2){
let startWord1 = ( word1.charAt(0) + word1.charAt(1) )
let startWord2 = ( word2.charAt(0) + word2.charAt(1) )
let endWord1 = word1.slice(2);
let endWord2 = word2.slice(2);
let mixedWord1 = (startWord2 + endWord1);
let mixedWord2 = (startWord1 + endWord2);
return (mixedWord1 + " " + mixedWord2);
}
console.log (mixedUp("New York", "Boston"));

// Fix Start
const fixStart = function (word){
let firstLetter = word.charAt(0);
let wordMinusStart = word.slice(1)
let fix = wordMinusStart.replaceAll(firstLetter, "*");
let fixed = (firstLetter + fix);
return fixed;
}
console.log(fixStart("concatination"));

// Verbing
const verbing = function (verb){
  let word = verb

  if ((word.slice(-3) !== "ing") && (word.length > 3)){
    return (word + "ing")
  }
    else if ((word.slice(-3) === "ing") && (word.length > 3)){
    return (word + "ly")
    }
      else {return word};
}
console.log(verbing("running"));
