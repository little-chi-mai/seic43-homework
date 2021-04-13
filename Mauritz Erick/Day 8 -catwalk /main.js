// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
// Bonus #4: Pretty much go nuts or whatever.

let img1 = document.getElementsByClassName('cat1')[0];
img1.style.top = '60px';
img1.style.left = '0px';

const catwalk = function(){
    let currentLeft = parseInt(img1.style.left);
    img1.style.left = (currentLeft + 10) + 'px';
    img1.style.webkitTransform ="scaleX(-1)";
    if (currentLeft > (1400-img1.width)) {
    img1.style.left = '0px';
  }
}
window.setInterval(catwalk, 50);


let img2 = document.getElementsByClassName('cat2')[0];
img2.style.top = '600px';
img2.style.left = '0px';
let walkForwards = true;

const catwalk2 = function(){
  let currentLeft = parseInt(img2.style.left);
  
  if (walkForwards && (currentLeft > (1100-img2.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  if (walkForwards) {
    img2.style.left = (currentLeft + 10) + 'px';
    img2.style.webkitTransform ="scaleX(-1)";
  } else {
    img2.style.left = (currentLeft - 10) + 'px';
    img2.style.webkitTransform ="scaleX(+1)";
  }

//   let halfscreen = window.innerWidth/2
//   if(currentLeft === halfscreen){
//       img2.style.webkitTransform ="scaleY(-1)";
//       window.clearInterval(timer);
//   }
}
window.setInterval(catwalk2,140);


let img3 = document.getElementsByClassName('cat3')[0];
img3.style.top = '580px';
img3.style.left = '0px';
img3.style.webkitTransform ="scaleX(-1)";

const catwalk3 = function(){
    let currentLeft = parseInt(img3.style.left);
    let currentTop = parseInt(img3.style.top);
    img3.style.left = (currentLeft + 10) + 'px';
    img3.style.top = (currentTop - 5) + 'px';
    if(currentTop == 0){
        img3.style.left = '0px';
        img3.style.top = '580px';
    }
}
window.setInterval(catwalk3, 90);

// let img4 = document.getElementsByClassName('cat4')[0];
// img4.style.top = '580px';
// img4.style.left = '1020px';

let img5 = document.getElementsByClassName('cat5')[0];
img5.style.top = '400px';
img5.style.left = '1100px';
img5.style.webkitTransform ="scaleX(-1)";




// window.setInterval(catwalk2, 10);
// window.setInterval(walkBack, 10);


// let img3 = document.getElementsByClassName('cat3')[0];
// img3.style.position = 'absolute';
// img3.style.top = '400px';
// img3.style.left = '0px';

// let img4 = document.getElementsByClassName('cat4')[0];
// img4.style.position = 'absolute';
// img4.style.top = '300px';
// img4.style.left = '650px';

// const catwalk3 = function(){
//     let oldLeft = parseInt(img3.style.left);
//     let newLeft = oldLeft + 10;
//     img3.style.left = newLeft + 'px';
    
//     if(newLeft > (window.innerWidth - img3.width)){
//         img3.style.left = '0px';
//     }
// }

// window.setInterval(catwalk3, 10)