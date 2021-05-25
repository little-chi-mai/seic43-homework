// # Even and Odd sums
// Take in an array and return an array of the sums of even and odd numbers
// ```js
// evenOddSums([50, 60, 60, 45, 71]);
// => [170, 116]
// ```

// # Steve Yegge's Code Test Question
// - Print out the primary school multiplication table up to 12x12

const evenOddSums = function(array) {
  let evenSum = 0;
  let oddSum = 0;
  
  array.map(num => num % 2 === 0 ? evenSum += num : oddSum += num)
  return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]));

const multiplicationTable = function() {
  const result = [];
  for (let i = 1; i < 13; i ++) {
    let row = []
    for (let j = 1; j < 13; j++) {
      console.log(`${i} x ${j} = ${i*j}`);
      row.push(`${i} x ${j} = ${i*j}`)
    }
    result.push(row)
  }
  console.log(result);
}
multiplicationTable()
