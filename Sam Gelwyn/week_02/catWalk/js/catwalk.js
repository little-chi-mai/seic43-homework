// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 


// const img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';
// const catWalk = function() {
//   img.style.left = (parseInt(img.style.left) + 10) + 'px';
// }
// window.setInterval(catWalk, 50);

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. 

// const img = document.getElementsByTagName('img')[0];
// img.style.left = 0;
// const catWalk = () => {
//   const currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + 10) + 'px';
//   if (currentLeft > (window.innerWidth - img.width)) {
//     img.style.left = 0;
//   }
// }
// window.setInterval(catWalk, 50);


// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. 

const img = document.getElementsByTagName('img')[0];
img.style.left = 0;
const walkForwards = true;
const catWalk = () => {
  const currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth - img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 50);
