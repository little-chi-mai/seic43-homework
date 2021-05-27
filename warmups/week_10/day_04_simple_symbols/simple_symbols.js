// # Simple Symbols
// Using the JavaScript language, write the function `simpleSymbols(str)` that takes the `str` parameter and determine if it is an acceptable sequence by either returning the string `true` or `false`. The `str` parameter will be composed of `+` and `=` symbols with several letters between them and for the string to be true each letter must be surrounded by a `+` symbol. The string will not be empty and will have at least one letter.
// ```js
// // For example:
// simpleSymbols("++d+===+c++==a") 
// // expect to return false
// simpleSymbols("++d+===+c++==d") 
// // expect to return false
// simpleSymbols("++d+===+c++==+a+==") 
// // expect to return true
// ```

const simpleSymbols = function(str) {
  let result = true;
  const inputArray = str.split('');

  const p = /[A-Za-z]/;

  inputArray.forEach((char, i) => {
    if (char.match(p)) {
      console.log(i);
      if (str[i - 1] !== '+' | str[i + 1] !== '+') {
        result = false
      }
    }
  })

  return result;
}

console.log(simpleSymbols("++d+===+c++==a"));
console.log(simpleSymbols("++d+===+c++==d"));
console.log(simpleSymbols("++d+===+c++==+D+"));
