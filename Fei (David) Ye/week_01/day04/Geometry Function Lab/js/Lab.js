// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };=

const isSquare = (obj) => {
  const isRectangle =
    typeof obj === "object" &&
    obj.length > 0 &&
    obj.width > 0 &&
    Object.keys(obj).length === 2;

  if (isRectangle && obj.length === obj.width) {
    return `This is a square.`;
  } else {
    return `This is not a square.`;
  }
};

const rectangleA = {
  length: 4,
  width: 4,
};

const rectangleB = {
  length: 4,
  width: 8,
};

const round = {
  radius: 5,
};

const Tom = {
  age: 20,
  gender: "male",
};

const shape = {
  length: "abc",
  width: true,
};

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));
console.log(isSquare(round));
console.log(isSquare(Tom));
console.log(isSquare(shape));

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

// My comment:
// To improve:
// 1> Could write these functions as properties of an object named triangle
// 2> Could add more comment to explain the formula

const isTriangle = (triangle) => {
  let sides = [
    triangle.sideA - 0,
    triangle.sideB - 0,
    triangle.sideC - 0,
  ].sort();

  return (
    typeof triangle === "object" &&
    triangle.sideA > 0 &&
    triangle.sideB > 0 &&
    triangle.sideC > 0 &&
    Object.keys(triangle).length === 3 &&
    sides[0] + sides[1] > sides[2] // a + b > c makes a triangle
  );
};

const isIsosceles = (triangle) => {
  if (
    (isTriangle(triangle) && triangle.sideA === triangle.sideB) ||
    triangle.sideA === triangle.sideC ||
    triangleA.sideB === triangleA.sideC
  ) {
    return `This is an isosceles triangle`;
  } else {
    return `This is not an isosceles triangle`;
  }
};

const isEquilateral = (triangle) => {
  if (
    isTriangle(triangle) &&
    triangle.sideA === triangle.sideB &&
    triangle.sideA === triangle.sideC &&
    triangleA.sideB === triangleA.sideC
  ) {
    return `This is an equilateral triangle`;
  } else {
    return `This is not an equilateral triangle`;
  }
};

const area = (triangle) => {
  if (isTriangle(triangle)) {
    const s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    return Math.sqrt(
      s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC) // Formula to calculate area with 3 sides
    );
  } else {
    return `This is not a triangle`;
  }
};

const isObtuse = (triangle) => {
  if (
    isTriangle(triangle) &&
    triangle.sideA ** 2 > triangle.sideB ** 2 + triangle.sideC ** 2 &&
    triangle.sideB ** 2 > triangle.sideA ** 2 + triangle.sideC ** 2 &&
    triangle.sideC ** 2 > triangle.sideB ** 2 + triangle.sideA ** 2
  ) {
    return `This is an obtuse triangle`;
  } else {
    return `This is not an obtuse triangle`;
  }
};

//If c2>a2+b2 then the triangle is obtuse.

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

console.log(isTriangle(triangleA));
console.log(isIsosceles(triangleA));
console.log(isEquilateral(triangleA));
console.log(isObtuse(triangleA));
console.log(area(triangleA));
