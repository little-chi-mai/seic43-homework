console.log("                         Hello, Word Guesser Game");
console.log (" ");
//Where you input word
const word = ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"];

//Storage of letters guessed by player
const guessedLetters = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

//Only need to guessed array to be as long as the word array
guessedLetters.length = word.length;

//Intro stuff
const introStuff = function (){
console.log ("  Please guess the following word by using the following command...."); // please use capital letters"
console.log (" ");
console.log ('                           guessLetter("A");');
console.log (" ");
console.log ('               Replace "A" with your letter (in capitals)');
console.log (" ");
console.log (" ");
console.log (" ");
console.log ("                  Here is your blank word. Good Luck.")
console.log(guessedLetters);
}
introStuff();

// Storage of correct guesses
let correctGuesses = 0
// Storage of prize money amount
let prizeAmount = 0;

// Where shit happens/ How to guess.
let guessLetter = function (Letter) {

// Guessed letter = variable "the letter" (probably just a name change)
let theLetter = Letter;

// Storage of "Did I find a letter this guess?""
let foundLetter = null

//final conditional for a won game
winnerWinner = function(){
  if ( (correctGuesses == guessedLetters.length) && (prizeAmount > 0) ) {
    console.clear()
    console.log (`          CONGRATULATIONS! YOU GUESSED THE WORD ${guessedLetters} CORRECTLY!`)
    console.log (" ")
    console.log(`                            YOU WIN $${prizeAmount}!`);
  }
  else if ( (correctGuesses == guessedLetters.length) && (prizeAmount < 0) ) {
    console.clear()
    console.log (`        CONGRATULATIONS! YOU GUESSED THE WORD ${guessedLetters} CORRECTLY!`)
    console.log ("  ")
    console.log (`Unfortunately you suck at this game and your prize money is at $${prizeAmount} so....`)
    console.log (' ')
    console.log ("                            Pay me");
}
}

// Loop to work out if successful guess
  for (i = 0; i < word.length; i++){

// Correct Guess definition and action
    if((word[i] === theLetter) && (guessedLetters[i] !== theLetter)  ){
      console.clear();
      guessedLetters[i] = word[i];
      console.log(guessedLetters);
      prizeAmount = prizeAmount + 15;
      foundLetter = "True";
      correctGuesses = (correctGuesses + 1);

      }

// Incorrect Guess
     else if ( (i === word.length - 1) && (foundLetter !== "True") ){
       console.clear();
       console.log(guessedLetters);
       prizeAmount = prizeAmount - 15;
       console.log(" ");
       return `Sorry, incorrect. You lose $15 and now have $${prizeAmount}`
     }

   }


// Returning a display for if successfully found letter. Return needed to be outside of loop so loop doesn't end.
if ((foundLetter = "True") && (correctGuesses == guessedLetters.length)    ) {

  //function to determine if won & execute
  winnerWinner();}

  //what happens if you guessed right but didn't win
  else if (foundLetter = "True"){
    console.log(" ");
  return( `     Congratulations, You guessed a letter! You now have $${prizeAmount}   ` );
}
 }


 //mconsole.log(guessLetter(window.prompt("Welcome to the Word Guesser Game                                               Type an upper-case letter to get started!", "" )));



 //console.log(guessedLetters.length)
