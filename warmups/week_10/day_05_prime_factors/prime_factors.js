// # Prime Factors
// A [prime number](https://en.wikipedia.org/wiki/Prime_number) is any number greater than one that is only divisible by itself.

// - 1 is not a prime number (it is not greater than 1).
// - 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// - 3 is a prime number (as above).
// - 4 is not a prime number (it is evenly divisible by 2).
// The [prime factors](https://en.wikipedia.org/wiki/Prime_number#Unique_factorization) of an integer are the set of prime numbers that will divide the integer exactly.

// ## Example
// What are the prime factors of 60?

// - 1 is not a prime number.
// - 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// - 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// - 15 is not evenly divisible by 2.
// - 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// - 4 is not a prime number.
// - 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 60), and leaves 1.
// - When we get to 1, we're done.
// - The prime factors of 60 are **2, 2, 3, 5**
// You can check this yourself:

// - 2 * 2 * 3 * 5
// - = 60
// - Success!
// ## YOUR TASK
// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.

// ```js
// primeFactors(60);
// // expect to return [2, 2, 3, 5]

// primeFactors(3464);
// // expect to return [2, 2, 2, 433]
// ```

// ## BONUS
// Do it with recursion

// ## Some more examples of how to find prime factors 
// [mesacc.edu](https://www.mesacc.edu/~scotz47781/mat120/notes/radicals/simplify/images/examples/prime_factorization.html#:~:text=Step%201%3A%20Start%20by%20dividing,a%20product%20of%20prime%20numbers.)

const primeFactors = function(number) {
  let result = [];
  let numToConsider = number;

  for (let i = 2; i <= numToConsider; i++) {
    // console.log(i);
    while (numToConsider % i === 0) {
      result.push(i);
      // console.log('result', result);
      numToConsider = numToConsider / i;
    }
  }
  console.log(`Prime factors of ${number} are: ${result.join(', ')}`);
  return result;
}

// console.log(primeFactors(60));

const recPrimeFactors = function(number, result = []) {

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
      return recPrimeFactors(number / i, result);
    }
  }

  console.log(`Prime factors of ${result.reduce((a, b) => a * b)} are: ${result.join(', ')}`);
  return result;
}

console.log(recPrimeFactors(60));
