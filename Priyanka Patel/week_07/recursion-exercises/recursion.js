// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
console.log('Hello Recursion');

function findMax(arr, index = 0, maxNumber = -Number.MAX_VALUE){
    // This function returns the largest number in a given array.
    if (index === arr.length) {
      return maxNumber
    }
    if (arr[index] > maxNumber) {
      maxNumber =  (arr[index]
    }
    return findMax(arr, index + 1, maxNumber)
    //return maxNumber
};

  findMax([3, 5, 7, 8, 20])

  // This function returns the factorial of a given number.
  function factorial(num){
      if (num <= 1) {
        return 1;
      }
      else {
        return num * factorial(num-1)
      };
  };

function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if ( num <= 2) {
      return 1
    }
    else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

function coinFlips(toss){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    const result = [];
    const current = '';
    const flips = function (toss, result, current) {
      if (toss === 1) {
        result.push(current + 'H');
        result.push(current + 'T');
      }
      else {
        flips(toss- 1, result, current + 'H');
        flips(toss- 1, result, current + 'T');
      };
    }
    flips(toss, result, '');
    console.log(result);
    return result;
}

coinFlips(2)

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    let conbinations = [];

}
letterCombinations(["a","b","c"])
// module.exports = {
//     findMax,
//     factorial,
//     fibonacci,
//     coinFlips,
//     letterCombinations
// }
