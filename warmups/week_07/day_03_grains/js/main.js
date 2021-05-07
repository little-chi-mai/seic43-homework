// # Grains
// There once was a wise servant who saved the life of his king. The king promised to pay whatever the servant could dream up. The servant told the king he would take his reward in grains of wheat, to be calculated using a chessboard - starting with one grain of rice on the first square of the chessboard, each subsequent square should have double the number of grains of rice of the previous square. That is, one grain on the first square of a chess board. Two grains on the second. Four grains on the third. Eight grains on the fourth. 16 on the fifth, and so on.
// There are 64 squares on a chessboard.
// Write a program that shows
// 1. how many grains were on a particular square
// ```javascript
// // for example:
// 'Square 3: 4'
// ```
// 2. how many grains were on each square
// ```javascript
// // for example:
// 'Square 1: 1'
// 'Square 2: 2'
// 'Square 3: 4'
// 'Square 4: 8'
// 'Square 5: 16'
// ...
// 'Square 64: 9223372036854775808'
// ```
// 3. the total number of grains on the board
// ```javascript
// 'The total number of grains is _[????]_'
// ```
// Do this in JS.
// ## Hints
// The [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method could be useful

const grainsOnSquare = function (num) {
  if (num > 0) {
    return BigInt(2 ** (num - 1));
  }
}

console.log(`Square 64: ${grainsOnSquare(64)}`);

const grainsOnAllSquare = function () {
  let result = {};

  for (let i = 1; i <= 64; i++) {
    result[i] = grainsOnSquare(i);
  }

  return result;
}

Object.keys(grainsOnAllSquare()).forEach(square => {
  console.log(`Square ${square}: ${grainsOnAllSquare()[square]}`);
})

const totalGrains = function() {
  let result = 0;

  result = Object.values(grainsOnAllSquare()).reduce((accumulator, currentValue) => accumulator + currentValue);

  return result;
}

console.log(`The total number of grains is ${totalGrains()}`);

