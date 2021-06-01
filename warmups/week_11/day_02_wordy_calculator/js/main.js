// console.log('lala');

// # Wordy Calculator
// Write a JavaScript function that accepts a question as its argument in the following formats:

// ```
// "What is 5 plus 13?"

// "What is 7 minus 5?"

// "What is -6 multiplied by 4?"

// "What is 25 divided by -5?"
// ```

// and returns the answer as an integer.

// **HINT**: You will probably want to use JavaScript's `match()` method, and in particular a [capture](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) group which uses parentheses in the regex.

// [This site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) might also be helpful.

const wordyCalculator = function(question) {
  let result = 0;

  let p = /(-?\d+)\s+(plus|minus|multiplied by|divided by)\s+(-?\d+)/i;
  let matches = question.match(p);

  if (!matches) return "Invalid question";

  const a = parseInt(matches[1]);
  const b = parseInt(matches[3]);
  const operator = matches[2].toLowerCase();
  console.log(a, b, operator);

  if (operator === "plus") {
    result = a + b;
  } else if (operator === "minus") {
    result = a - b;
  } else if (operator === "multiplied by") {
    result = a * b;
  } else if (operator === "divided by") {
    result = a / b;
  }
  console.log(result);
  return result;
}

wordyCalculator("What is 5   PLUS      13?");
// wordyCalculator("What is 7 minus 5?");
// wordyCalculator("What is -6 multiplied by 4?");
// wordyCalculator("hat is 25 divided by -5?");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval