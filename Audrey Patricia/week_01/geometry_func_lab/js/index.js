// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function(rect){
  if(rect.length === rect.width){
  return true;
}else{
  false;
}

}

console.log(isSquare(rectangleA));

const area = function(rect){
  return (rect.length * rect.width);
}

console.log(area(rectangleA));

const perimeter = function(rect){
  return ( (2 * rect.length) + (2 * rect.width) );
}

console.log(perimeter(rectangleA));


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//



//sample triangles:
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 2,
  sideB: 2,
  sideC: 2.5,
};

const triangleC = {
  sideA: 9,
  sideB: 12.16062,
  sideC: 9,
};

const triangleD = {
  sideA: 2,
  sideB: 3.1,
  sideC: 2.5,
};

const triangleE = {
  sideA: 5.1,
  sideB: 3.1,
  sideC: 2.5,
};


// isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function(tri){
  if(tri.sideA === tri.sideB && tri.sideA === tri.sideC && tri.sideB === tri.sideC){
    return true;
  }else{
    return false;
  }
}

console.log("is Equilateral? : " + isEquilateral(triangleA));

// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function(tri){
  if(tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC){
    return true;
  }else{
    return false;
  }
}

console.log("is Isoceles? : " + isIsosceles(triangleB));
console.log("is Isoceles? : " + isIsosceles(triangleC));
console.log("is Isoceles? : " + isIsosceles(triangleA));

// area - Returns the area of the Triangle

const areaTri = function(tri){
   let s = (tri.sideA + tri.sideB + tri.sideC) / 2 ;
   let area = Math.sqrt(s * ((s - tri.sideA) * (s - tri.sideB) * (s - tri.sideC)));

   return area;
}

console.log("area is: " + areaTri(triangleA));

// isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function(tri){

  let longestSide;
  let side1;
  let side2;

  if(tri.sideA > tri.sideB && tri.sideA > tri.sideC){
    longestSide = tri.sideA;
    side1 = tri.sideB;
    side2 = tri.sideC;

  }else if(tri.sideB > tri.sideA && tri.sideB > tri.sideC){
    longestSide = tri.sideB;
    side1 = tri.sideA;
    side2 = tri.sideC;

  }else if(tri.sideC > tri.sideB && tri.sideC > tri.sideA){
    longestSide = tri.sideC;
    side1 = tri.sideB;
    side2 = tri.sideA;
  }

  let longestSideSquared = Math.pow(longestSide, 2);
  let shortSidesSquared = Math.pow(side1, 2) + Math.pow(side2, 2);

  if(longestSideSquared > shortSidesSquared){
    return true;
  }else{
    return false;
  }

//How to make code shorter????

// let values = Object.values(tri);
// let largest = 0;
//
// for(let i = 0; i < values.length; i++){
//   if(values[i] > largest){
//     largest = values[i];
//   }
// }
//
// let indexOf = values.indexOf(largest);
// delete values[indexOf];

}

console.log("Is obtuse?: " + isObtuse(triangleA));
console.log("Is obtuse?: " + isObtuse(triangleB));
console.log("Is obtuse?: " + isObtuse(triangleE));
