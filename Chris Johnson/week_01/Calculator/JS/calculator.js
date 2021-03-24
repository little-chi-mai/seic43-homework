console.log("hello world");

/*
const squareNumber = function (number) {
  let output = (number * number);
  console.log (`The result of squaring the number ${number} is ${output}`);
  return output ;
}

squareNumber(10);

const halfNumber = function (number) {
  let output = (number/2);
  console.log(`Half of ${number} is ${output}`);
  return output;
}

halfNumber(10);

const percentOf = function (number1,number2){
  let output = (number2/number1);
  let output2 = (100/output);
  console.log(`${number1} is ${output2}% of ${number2}`);
  return output2;
}

percentOf(5,10);


const roundToDec = function (number, decPlace){
  let output1 = Math.round((10 ** decPlace) * number);
  let output2 = (output1/(10 ** decPlace));
  return output2;
}


const areaOfCircle = function (radius){
  let output = (Math.PI * (radius * radius));
  let outputRounded = roundToDec(output,2);
  console.log(`The area of a circle with a radius of ${radius} is ${outputRounded}`);
  return output;
}

areaOfCircle(10);

const whyDoThis = function(poorNumber){
  const step1 = halfNumber(poorNumber);
  const step2 = squareNumber(step1);
  const step3 = areaOfCircle(step2);
  const step4 = percentOf(step3,step2);
  console.log(`wtf ${step4}`);
}

whyDoThis(10);
*/


const warmup = function(numInput){

  let output = ""

if (numInput % 3 === 0){
  output = output + "Pling";
}

if (numInput % 5 === 0){
  output = output + "Plang";
}

if (numInput % 7 === 0){
  output = output + "Plong";
}
if (output.length === 0){
  output = numInput;
}

return output
}

console.log(warmup(41));
