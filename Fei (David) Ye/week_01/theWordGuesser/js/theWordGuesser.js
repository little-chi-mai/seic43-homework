// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

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


// David's comment of the game:
// Things to improve if had more time:
// 1. Make the guess letter case insensitive  --- Solved!
// 2. Reduce some redundant log
// 3. Add more interation, e.g. allow user to prompt a word for another user to guess
// 4. Add some HTML and CSS to make it look better
// 5. The code might need refactoring to improve the quality
// 6. Add more comment to the statements.


//###David's Word Guesser (Please comment the other 2 version of the game out and uncomment this one to play)#######################


let guessWord = 'Fox';  //to lower case

guessWord = guessWord.toLowerCase(); //to lower case

const guessWordArr = guessWord.split('');

const currentGuessedLettersArr = [];

for (let i = 0; i < guessWordArr.length; i++) {
    currentGuessedLettersArr.push('_ ');
}

console.log(currentGuessedLettersArr.join(''));

const guessLetter = (letter) => {

    letter = letter.toLowerCase();   //to lower case

    console.log(`>>> User guessed letter "${letter}"`);

    if (guessWordArr.indexOf(letter) === -1) {
        console.log('No letter matched, please keep trying!');
    } else {
        const indices = [];
        for (let i = 0; i < guessWord.length; i++) {
            if (guessWord[i] === letter) {
                indices.push(i);
                console.log('Congratulations, you find a new letter!')
            }
        }

        for (let i = 0; i < indices.length; i++) {
            //to uppser case

            if (indices[i] === 0) {
                currentGuessedLettersArr[indices[i]] = letter.toUpperCase();
            } else {
                currentGuessedLettersArr[indices[i]] = letter;
            }


            //to upper case
        }

        console.log(currentGuessedLettersArr.join(''));

        let remainingLetterNumber = 0;
        for (let i = 0; i < currentGuessedLettersArr.length; ++i) {
            if (currentGuessedLettersArr[i] === '_ ') {
                remainingLetterNumber++
            }
        }

        if (remainingLetterNumber !== 0) {
            console.log(`You still have to find ${remainingLetterNumber} letters to win the game!`);
        } else {
            console.log(`Congratulations, you have won the game!`)
        }
    }
}


guessLetter('a');
guessLetter('f');
guessLetter('o');
guessLetter('x');


//#################################################################


// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.


//###David's Wheel of Fortune (Please comment the other 2 version of the game out and uncomment this one to play)####################


// let reward = 0;

// let guessWord = 'DEDUCT';

// guessWord = guessWord.toLowerCase();

// const guessWordArr = guessWord.split('');

// const currentGuessedLettersArr = [];

// for (let i = 0; i < guessWordArr.length; i++) {
//     currentGuessedLettersArr.push('_ ');
// }

// console.log(currentGuessedLettersArr.join(''));

// const showRewardAmount = () => {
//     console.log(`Current reward amount is $${reward}`);
// }

// const guessLetter = (letter) => {

//     letter = letter.toLowerCase();

//     showRewardAmount();

//     let randomAmount = Math.round(Math.random() * 100);

//     console.log(`>>> User guessed letter "${letter}"`);

//     if (guessWordArr.indexOf(letter) === -1) {
//         console.log('No letter matched, please keep trying!');
//         reward -= randomAmount;
//         console.log(`You lose $${randomAmount}!`);
//         showRewardAmount();
//     } else {
//         const indices = [];
//         for (let i = 0; i < guessWord.length; i++) {
//             if (guessWord[i] === letter) {
//                 indices.push(i);
//                 console.log('Congratulations, you find a new letter!')
//                 reward += randomAmount;
//                 console.log(`You win $${randomAmount}!`);
//                 showRewardAmount();
//             }
//         }

//         for (let i = 0; i < indices.length; i++) {

//             if (indices[i] === 0) {
//                 currentGuessedLettersArr[indices[i]] = letter.toUpperCase();
//             } else {
//                 currentGuessedLettersArr[indices[i]] = letter;
//             }
//         }

//         console.log(currentGuessedLettersArr.join(''));

//         let remainingLetterNumber = 0;
//         for (let i = 0; i < currentGuessedLettersArr.length; ++i) {
//             if (currentGuessedLettersArr[i] === '_ ') {
//                 remainingLetterNumber++
//             }
//         }

//         if (remainingLetterNumber !== 0) {
//             console.log(`You still have to find ${remainingLetterNumber} letters to win the game!`);
//         } else {
//             console.log(`Congratulations, you have won the game!`);
//             showRewardAmount();
//         }
//     }
// }

// guessLetter('d');
// guessLetter('a');
// guessLetter('f');
// guessLetter('e');
// guessLetter('u');
// guessLetter('c');
// guessLetter('t');

//#################################################################


// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


//###David's Hangman (Please comment the other 2 version of the game out and uncomment this one to play)###########################

// let hangman = 0;

// let guessWord = 'Fox';  //to lower case

// guessWord = guessWord.toLowerCase(); //to lower case

// const guessWordArr = guessWord.split('');

// const currentGuessedLettersArr = [];

// for (let i = 0; i < guessWordArr.length; i++) {
//     currentGuessedLettersArr.push('_ ');
// }

// console.log(currentGuessedLettersArr.join(''));

// const letterArr = [];

// const guessLetter = (letter) => {

//     letter = letter.toLowerCase();

//     console.log(`>>> User guessed letter "${letter}"`)

//     if (guessWordArr.indexOf(letter) === -1) {
//         if (letterArr.indexOf(letter) === -1) {
//             console.log('No letter matched, please keep trying!');
//             hangman++;
//         } else {
//             console.log(`You have already guessed this letter!`);
//         }
//         letterArr.push(letter);
//     } else {
//         const indices = [];
//         for (let i = 0; i < guessWord.length; i++) {
//             if (guessWord[i] === letter) {
//                 indices.push(i);
//                 console.log('Congratulations, you find a new letter!')
//             }
//         }

//         for (let i = 0; i < indices.length; i++) {
//             if (indices[i] === 0) {
//                 currentGuessedLettersArr[indices[i]] = letter.toUpperCase();
//             } else {
//                 currentGuessedLettersArr[indices[i]] = letter;
//             }
//         }

//         console.log(currentGuessedLettersArr.join(''));

//         let remainingLetterNumber = 0;
//         for (let i = 0; i < currentGuessedLettersArr.length; ++i) {
//             if (currentGuessedLettersArr[i] === '_ ') {
//                 remainingLetterNumber++
//             }
//         }

//         if (remainingLetterNumber !== 0) {
//             console.log(`You still have to find ${remainingLetterNumber} letters to win the game!`);
//         } else {
//             console.log(`Congratulations, you have won the game!`)
//         }
//     }

//     if (hangman >= 6) {
//         console.log('Sorry, you lost!');
//         console.log('  |');
//         console.log('  |');
//         console.log('  o');
//         console.log(' /|\\');
//         console.log('  /\\');
//     }
// }


// for (let i = 0; i < 6; i++) {
//     guessLetter('b'); 
// }

// guessLetter('d');
// guessLetter('e');
// guessLetter('f');
// guessLetter('g');
// guessLetter('h');
// guessLetter('j');




//#################################################################