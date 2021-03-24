  const squareNumber = function (number){
  result = number * number;
  console.log (`The result of squaring the ${ number } is ${ result }`)
  return result;
}

squareNumber(3);

  const halfNumber = function (number) {
  result = number / 2;
  console.log (`Half of ${ number } is ${ result }`);
  return result;
}

halfNumber(5);

  const percentageOf = function (num1, num2) {
  percentageResult =  (num1 * 100) / num2
  console.log (`${ (num1).toFixed(2) } is ${ (percentageResult).toFixed(2)} % of ${ num2}`);
  return percentageResult;
}

percentageOf (10, 5);

  const areaOfCircle = function (radius) {
  area = Math.PI * (radius * radius);
  console.log(`The area of circle with radius ${ radius } is ${(area).toFixed(2)}`)
  return area;
}

areaOfCircle(4);

  const grandTotal = function (x) {
  const halfOfNum = halfNumber(x);
  const squareOfNum = halfOfNum * halfOfNum;
  const calculateArea =areaOfCircle(squareOfNum);
  percentageOf (calculateArea, squareOfNum);
  return (percentageResult);
};
grandTotal(5);

// warmup
const displayResult = function (x){

    for  (let i = 1; i <= x; i++);
    {
      if ( x/i === 0) {
        console.log (i);
        if ( i === 3)
        {
          console.log ('Pling');
        }
        else if ( i === 5) {
          console.log ('Plang');
        }
        else if (i === 7) {
          console.log ('Plong')
        }
        else {
          console.log(x.tostring(x))
        }
      }
    }
  }
  displayResult(28);
