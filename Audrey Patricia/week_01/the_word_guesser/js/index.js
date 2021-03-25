// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

let lettersOfWord = ['F','O','X'];
let guessedLetters = [];
let letterMatched = false;
let wrongGuesses = [];

const wordToBeGuessed = function(word){
  word = word.toUpperCase();
  lettersOfWord = word.split("");
  console.log(lettersOfWord);
}

const startGame = function(){
  guessedLetters = [];
  let length = lettersOfWord.length;
  for(let i = 0; i < length; i++){
    guessedLetters.push("_");
  }
  console.log("Guess this word: " + guessedLetters.join(" "));
}

const guess = function(letter){
  for(let i = 0; i < lettersOfWord.length; i++){
    if(letter.toUpperCase() == lettersOfWord[i]){
      letterMatched = true;
      console.log("congratulations, you guessed a letter right!");
      guessedLetters[i] = letter.toUpperCase();
      console.log(guessedLetters.join(" "));
    }else{
      letterMatched = false;
    }
  }

  if(letterMatched == false){
    wrongGuesses.push(letter);
    console.log("Wrong guesses you have made so far: " + wrongGuesses);
  }

  endGame();
}

const endGame = function(){
  if(guessedLetters.join("").includes("_") === false){
    console.log("CONGRATULATIONS! You have guessed the word :D");
  }
}




// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

//TO MAKE IT MORE LIKE WHEEL OF FORTUNE UNCOMMENT LINES 72-111 AND COMMENT OUT LINES 36-60

// let rewardTotal = 0;
// let reward;
// let penalty;
//
// const guess = function(letter){
//   for(let i = 0; i < lettersOfWord.length; i++){
//     if(letter.toUpperCase() == lettersOfWord[i]){
//       letterMatched = true;
//       console.log("congratulations, you guessed a letter right!");
//       guessedLetters[i] = letter.toUpperCase();
//       console.log(guessedLetters.join(" "));
//
//       reward = Math.round(Math.random() * 100);
//       rewardTotal += reward;
//       console.log(`You received a reward of $${reward}, you're current total reward is $${rewardTotal}` );
//
//     }else{
//       letterMatched = false;
//     }
//   }
//
//   if(letterMatched == false){
//     wrongGuesses.push(letter);
//     console.log("Wrong guesses you have made so far: " + wrongGuesses);
//
//     penalty = Math.round(Math.random() * 100);
//     rewardTotal -= penalty;
//     console.log(`Penalty of $${penalty}, you're current total reward is $${rewardTotal}` );
//
//   }
//
//   endGame();
// }

// const endGame = function(){
//   if(guessedLetters.join("").includes("_") === false){
//     console.log(`CONGRATULATIONS! You have guessed the word :D and have earned a total reward of $${rewardTotal}`);
//     rewardTotal = 0;
//   }
// }


// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

// NOTE: TO MAKE IT MORE LIKE HANGMAN UNCOMMENT LINES 121-167 AND COMMENT OUT LINES 36-60

// let bodyPartCount = 0;
// let guessedTwice = false;
//
// const guess = function(letter){
//   for(let i = 0; i < lettersOfWord.length; i++){
//     if(letter.toUpperCase() == lettersOfWord[i]){
//       letterMatched = true;
//       console.log("congratulations, you guessed a letter right!");
//       guessedLetters[i] = letter.toUpperCase();
//       console.log(guessedLetters.join(" "));
//     }else{
//       letterMatched = false;
//     }
//   }
//
//   if(letterMatched == false){
//
//     for(let i = 0; i < wrongGuesses.length; i++){
//       if(letter == wrongGuesses[i]){
//         console.log("You already made that wrong guess before... are you purposely trying to kill the guy?")
//         guessedTwice = true;
//       }else{
//         guessedTwice = false;
//       }
//     }
//
//     if(guessedTwice === false){
//       bodyPartCount += 1;
//       wrongGuesses.push(letter);
//       console.log("Wrong guesses you have made so far: " + wrongGuesses);
//
//       if(bodyPartCount < 6){
//           console.log("body parts currently being hanged: " + bodyPartCount);
//       }else{
//           console.log("You killed the poor man with your wrong guesses... you lost :')");
//       }
//     }
//   }
//   endGame();
// }
//
// const endGame = function(){
//   if(guessedLetters.join("").includes("_") === false){
//     console.log("CONGRATULATIONS! You have guessed the word :D");
//     bodyPartCount = 0;
//   }
// }
