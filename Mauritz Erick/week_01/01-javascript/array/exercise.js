//Array and Functions Bonus Material
//Max of Two
const maxOfTwoNumber = function(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
} 
console.log(maxOfTwoNumber(5,1));
console.log(maxOfTwoNumber(5,10));

//Max of Three
const maxOfThree = function(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

//Character Take
console.log(maxOfThree(500,10000,100));

const takeChar = function(a){
    if(a == "a" || a == "e" || a == "i" || a == "o" || a == "u" ){
        return true;
    }
    else{
        return false;
    }
}

console.log(takeChar("a"));
console.log(takeChar("e"));
console.log(takeChar("b"));
console.log(takeChar("f"));
console.log(takeChar("r"));

//sumArray multiplyArray
const sumArray = function(nums){
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total;
}
console.log(sumArray([1,2,3,5]));


const multiplyArray = function(nums){
    let total = 1;
    for(let i = 0; i < nums.length; i++){
        total *= nums[i];
    }
    return total;
}
console.log(multiplyArray([1,2,3,6]));

//String Reversal
const reverseString = function(part5){
    return part5.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("jag tester"));

//Find Longest Word
const findLongestWord = function(array) {
    let elements = array.length;
    let count = 0;
    let proof = "";
    for (i = 0; i < elements; i++) {
      if (array[i].length > count) {
        count = array[i].length;
        proof = array[i];
        console.log(proof);
      }
    }
    return count;
  }
console.log(findLongestWord(["tidifsd","te","tes","test"]));




//return longer
const filterLongWords = function(array,int){
  let length = array.length;
  let longerThan = [];

  for(i = 0; i < length; i++){
      if (array[i].length > int){
          longerThan[longerThan.length] = array[i];
      }
  }
  return longerThan;
}
console.log(filterLongWords(["t","te","tasdasdes","test"], 3));