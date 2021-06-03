// # Google Interview Question
// This question was asked in an interview at Google, for a Junior Engineer role.
// Given an unordered array of integers and a value named sum, `return true` if any two items can be added and equal the value of sum. Otherwise, `return false`.
// So, if we were given the array ``[3, 5, 1, 4]`` and the value `9`, our function should `return true`, because `4 + 5 = 9`.

const findMatch = function(array, sum) {
  let result = false;

  for (let i = 0; i < array.length - 1; i++) {
    console.log("i", i);
    for (let j = i + 1; j < array.length; j++) {
      console.log("j", j);
      if (array[i] + array[j] === sum) {
        console.log(array[i], array[j]);
        result = true;
        return result;
      }
    }
  }
  console.log(result);
  return result;
}

console.log(findMatch([3, 5, 1, 4], 9));
