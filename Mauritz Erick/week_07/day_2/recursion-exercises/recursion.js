// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
const test = [5, 9, 10, 4, -4]
function findMax(arr){
     //Create a copy of the array for each recursion as this array is the recursive action, the thing that's being changed towards the base case
     let nums = arr.slice();
     //The base case is the final number is the array after the recursion as the recursion 
     if (nums.length === 1) {
         return nums[0];
     }
     //If the first is larger than the second, remove it from the array.
     if (nums[0] > nums[1]) {
         nums.splice(1, 1);
     } else {
         nums.splice(0, 1)
     }
     return findMax(nums)
}
console.log(findMax(test));

function factorial(num, n= num-1){
    // This function returns the factorial of a given number.
    if (n === 1){
        return num;
    }
    sum = num * n;

    return factorial(sum, n-1);
}


function fibonacci(test){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (test <= 1) {
        return test;
    }
    return fibonacci(test-1) + fibonacci(test-2);
}

function coinFlips(flips, arr = ['H','T']){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    let combination = arr.splice()

    if (flips < 0){
        return;
    }

    return coinFlips(4, arr)
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