/* Create a new Javascript file and link to it with a script tag at the bottom.

Create a variable to store a reference to the img.

Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

Bonus #4: Pretty much go nuts or whatever. */

console.log("hello world");

/* 

1. catWalk F
stop 1 / 2 screen width
replace img
setTimeout(function2, 10000)

2. continueWalk F
stop when right
reverse
walk toward left
 */

//Function 1
const cat = document.querySelector("img"); //cat walk
const catWalk = function () {
  cat.style.left = cat.offsetLeft + 10 + "px";
  if (cat.offsetLeft > (document.body.offsetWidth - cat.offsetWidth + 40) / 2) {
    //stop 1/2 screen
    clearInterval(walkTime);
    cat.src = "catdance.gif"; //replace cat image
    setTimeout(continueWalk, 10000); //set 10s later start
  }
};
const walkTime = setInterval(catWalk, 50);

//Function 2
const continueWalk = function () {
  cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"; //back to original cat
  const keepWalk = function () {
    cat.style.left = cat.offsetLeft + 10 + "px"; //keep walk toward right
    if (cat.offsetLeft > document.body.offsetWidth - cat.offsetWidth + 40) {
      //stop when hit right
      clearInterval(keepTime);
      cat.className = "rotate"; //change dirction

      const reverseWalk = function () {
        cat.style.left = cat.offsetLeft - 10 - cat.offsetWidth + "px"; //walk toward left
        if (cat.offsetLeft < cat.offsetWidth) {
          //stop when hit left
          clearInterval(reverseTime);
        }
      };
      const reverseTime = setInterval(reverseWalk, 50);
    }
  };
  const keepTime = setInterval(keepWalk, 50);
};
