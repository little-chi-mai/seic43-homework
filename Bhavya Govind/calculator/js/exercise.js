const squareNum = function squareNumber(a){
  return a*a;
}
console.log(`The result of squaring the number ${ 2 } is ${ squareNum(2) }.`);

//2

const halfNumber =  function result(num){
  return num/2;
};
console.log(`Half of ${5} is ${halfNumber(5)}`);

//
const percentOf = function result(a,b){
  return (a / b) * 100;
};
console.log(`3 is ${percentOf(3,7)}% of 7.`);
//

const areaOfCircle = function result(r){
return  (Math.PI * r * r).toFixed(2);

}
console.log("Area of the circle is " + areaOfCircle(3) );

//
const finalResult = function allFunc(a){
  const halfVlaue = halfNumber(a);
  const squareOf = squareNum(halfVlaue);
  const area = areaOfCircle(squareOf);
  return percentOf(squareOf,area);
}
console.log(`final result is ${finalResult(2)}`);
