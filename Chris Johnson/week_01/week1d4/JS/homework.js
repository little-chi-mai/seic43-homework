console.log("Welcome to more JavaScript")
console.log(" ");

//Part 1, Rectangle
const rectangleA = {
  length: 4,
  width: 4
};

let isSquare = function(rectangleName){
  if (rectangleName.length === rectangleName.width){
    return "Yes, this is a square"}
    else {return "Sorry this is not a square"}
  }
isSquare(rectangleA);
console.log(isSquare(rectangleA));

let areaRectangle = function(rectangleName){
rectangleArea = (rectangleName.length * rectangleName.width);
return rectangleArea
};
areaRectangle(rectangleA);
console.log(areaRectangle(rectangleA));

let perimeterRectangle = function(rectangleName){
  let perimeter = ((rectangleName.length * 2) + (rectangleName.length * 2));
  return perimeter;
}

perimeterRectangle(rectangleA);
console.log(perimeterRectangle(rectangleA));


//Part 2, Triangle
const triangleA = {
  sideA: 6,
  sideB: 3,
  sideC: 4
};

let isEquilateral = function(triangleName){
  if ( (triangleName.sideA === triangleName.sideB) && (triangleName.sideB === triangleName.sideC) ){
    return "This triangle is an equilateral!"
  }
  else return "This triangle is not an equilateral"
}
isEquilateral(triangleA);
console.log(isEquilateral(triangleA));

let isIsosceles = function(triangleName){
if ( (triangleName.sideA === triangleName.sideB) && (triangleName.sideB === triangleName.sideC) )
  {return "this triangle is not an isosceles... it's an equilateral."}
  else if ( (triangleName.sideA === triangleName.sideB) || (triangleName.sideB === triangleName.sideC) || (triangleName.sideA === triangleName.sideC) )
    {return "This triangle is an isosceles"}
       else return "This triangle is not an isosceles"
}
isIsosceles(triangleA);
console.log(isIsosceles(triangleA));

let triangleArea = function(triangleName){
  let s = ((triangleName.sideA + triangleName.sideB + triangleName.sideC)/2);
  console.log(s)
  let area = Math.sqrt((s * (s - triangleName.sideA)*(s - triangleName.sideB)*(s - triangleName.sideC)));
console.log(area);
return area;
}
triangleArea(triangleA);
console.log(triangleArea(triangleA));

let findHypotenuse = function(triangleName){

  if ( (triangleName.sideA > triangleName.sideB) && (triangleName.sideA > triangleName.sideC) ){return triangleName.sideA}
  else if (triangleName.sideB > triangleName.sideC) {return triangleName.sideB}
  else {return triangleName.sideC};
}
console.log(findHypotenuse(triangleA));

let isObtuse = function(triangleName){

let A = triangleName.sideA
let B = triangleName.sideB
let C = triangleName.sideC

if ((A ** 2)  >  ( (B ** 2) + (C ** 2) )) {return true}
if ((B ** 2)  >  ( (A ** 2) + (C ** 2) )) {return true}
if ((C ** 2)  >  ( (A ** 2) + (B ** 2) )) {return true}

else {return false}

}


console.log( isObtuse(triangleA) );

}

 Cash Register //

let shoppingCart = {

}
let cashRegister = function(){

}




//
//
//
// number = array position not input
// const maxOfThree = function (1, 2, 3) {
//   maxOfTwo  ( 3, (maxOfTwo(2,1)  )
// }
//
// const maxOfFour = function (1, 2, 3, 4){
//   maxOfFour(maxOfTwo(4, 3), maxOfTwo(2, 1))
//
// const maxOfFive = function (1, 2, 3, 4, 5){
// maxOfFive(5, maxOfFour(maxOfTwo(4, 3), maxOfTwo(2, 1)))
// }
//
// const maxOfSix = function (1, 2, 3, 4, 5, 6){
// maxOfsix(maxOfTwo(6, 5), maxOfFour(maxOfTwo(4, 3), maxOfTwo(2, 1)))
// }
//
// for (i = 3; i < maxOfAmount; i++)
//
//
//
// const maxOfTwo = function (num1, num2){
//   if (num1 > num2){return num1}
//   else{return num2}
// }
//
// //console.log(maxOfTwo(100, 500));
//
// const maxOfThree = function (num1, num2, num3){
// let max =                            maxOfTwo                           (maxOfTwo (num1, num2), maxOfTwo(num2, num3));
// return max;
// }
// const maxOfFour = function (num1, num2, num3, num4){
//   let max =                          maxOfTwo                           (maxOfTwo (num1, num2), maxOfTwo(num3, num4));
// return max;
// }
// const maxOfFive = function (num1, num2, num3, num4, num5){
//   let max =               maxOfTwo ((maxOfTwo (num1, num2)) ,           (maxOfTwo (num3, num4), maxOfTwo(num4, num5)));
// return max;
// }
// const maxOfSix = function (num1, num2, num3, num4, num5, num6){
//   let max =               maxOfTwo ((maxOfTwo (num1, num2)),            (maxOfTwo (num3, num4), maxOfTwo(num5, num6))) ;
// return max;
// }
// const maxOfSeven = function (num1, num2, num3, num4, num5, num6, num7){
//   let max = maxOfTwo ((maxOfTwo(num1, num2), maxOfTwo (num3, num4)),     (maxOfTwo (num5, num6), maxOfTwo(num6, num7))) ;
// return max;
// }
//
// console.log(maxOfThree(100, 501, 200))
// console.log(maxOfFour(100, 601, 100, 900))
// console.log(maxOfFive(1, 5, 7, 400, 3))
// console.log(maxOfSix(1, 2, 4, 5, 7, 50))
// console.log(maxOfSeven(1, 2, 3, 4, 5, 600, 7))

//
// const mathewMax = function(inputs){
//
//
// let largestNumber = null;
//
//
//   for (let i = 0; i < inputs.length; i++)
//   {
//     if (inputs[i] > largestNumber){largestNumber = input[i]};
//
//   }
//
//
// return largestNumber
// }
//
// console.log(mathewMax(1, 2, 3, 4, 5, 6, 300, 400, 100, 10));
//

/*

const maxOfTwo = function (1, 2){
maxOftwo (1,2)

const maxOfThree = function (1, 2, 3) {
  maxOfTwo ((maxoftwo(1, 2)), 3)

  const maxOfFour = function (1, 2, 3, 4) {
    maxOfTwo ( (maxoftwo 1, 2), (MaxOfTwo (3, 4) )

    const maxOfFive = function (1, 2, 3, 4, 5) {
      maxOfTwo (   (maxoftwo 1, 2)    (MaxOfTwo ((maxoftwo 3, 4), 5))

      const maxOfSix = function (1, 2, 3, 4, 5, 6) {
        maxoftwo maxoftwo 1, 2, maxoftwo3, 4, maxoftwo 5, 6

        const maxOfSeven = function (1, 2, 3, 4, 5, 6, 7) {
          maxoftwo ((((maxoftwo(1, 2)), maxoftwo(3, 4))), maxoftwo(5, 6)7)


    1 ? 2
    1 ? (2 ? 3)
    (1 ? 2) ? (3 ? 4)
    1 ? ((2 ? 3) ? (4 ? 5))

    */
