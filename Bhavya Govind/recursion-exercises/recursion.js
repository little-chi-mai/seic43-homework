// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr,index = 0, max = -Number.MAX_VALUE ){
    // This function returns the largest number in a given array.

  if(arr.length > index){
    if (arr[index] > max){
      max = arr[index];
    }
    nextIndex = index + 1;
    return findMax(arr,nextIndex,max);
  }
  return max;
}

function factorial(num, multiply = num - 1){
    // This function returns the factorial of a given number.
    if(multiply < 1){
      return num
    }
    num = num * multiply;
    return factorial(num, multiply - 1);
}

function fibonacci(num, result = 0, prev = 1, count = 0){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if(num === count){
      return result;
    }
    sum = prev + result;
    prev = result;
    result = sum;
    return fibonacci(num,result,prev,count+1);

}

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    function addFlips(n, result, current) {
        if (n === 1) {
            // This is the last flip, so add the result to the array
            console.log(current);
            result.push(current + 'H');
            result.push(current + 'T');
        } else {
            // Let's say current is TTH (next combos are TTHH and TTHT)
            // Then for each of the 2 combos call add Flips again to get the next flips.
            console.log(current);
            addFlips(n - 1, result, current + 'H');
            addFlips(n - 1, result, current + 'T');
        }
    }
    // Begin with empty results
    let result = [];
    // Current starts with empty string
    addFlips(n, result, '');
    return result;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
