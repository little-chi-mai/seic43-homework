// ## Recurring Letters
// Create a function that takes in a sentence and outputs the letter that's repeated most frequently.
// ```js
// recurringLetter('just a simple sentence chilling');
// // => The recurring letter of "just a simple sentence chilling" is e
// ```
// Use simple sentences with regular spaces between each word (like in the sentence you are reading) but if you want you can account for other characters such as !@#$%^&*? etc..
// *Hint:* You'll need to loop and count each of the letters.
// **Bonus:** Create another function that capitalises that letter within the sentence. 
// ```js
// capitaliseLetter('just a simple sentence chilling', 'e');
// // => just a simplE sEntEncE chilling
// ```

const recurringLetter = function (string) {
  // countBy() will count the letter the appears in the string and put them in an object
  let letterCounts = _(string).countBy();

  // omit() will exclude a key-value pair from an object
  letterCounts = _(letterCounts).omit(' ');

  // find the maxScore
  const maxScore = _(letterCounts).max();
  console.log(maxScore);

  let maxLetter = '';

  // loop through letterCounts to find maxLetter where the value === maxScore
  _(letterCounts).map((value, letter) => {
    // console.log(value, letter);
    if (value === maxScore) {
      maxLetter = letter;
    }
  })

  console.log(`The most recurring letter of "${string}" is "${maxLetter}" for ${maxScore} times.`);
}

recurringLetter('just a simple sentence chilling');

const capitaliseLetter = function (string, letter) {
  // map() returns an array
  let newLetterArray = _(string).map(char => {
    if (char === letter) {
      return char.toUpperCase();
    } else {
      return char;
    }
  })

  console.log(newLetterArray.join(''));
}

capitaliseLetter('just a simple sentence chilling', 'n');