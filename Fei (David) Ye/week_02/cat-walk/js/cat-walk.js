// # Exercises: Animation

// ## The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
  
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
  
//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. 

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. 

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// - Bonus #4: Pretty much go nuts or whatever.


// Solution: 

// const img=document.getElementsByTagName('img')[0];

// img.style.left='0px';

// const catWalk=()=>{
//     const oldLeft= parseInt(img.style.left);
//     const newLeft = oldLeft + 10;
//     img.style.left = newLeft + 'px';
// }

// setInterval(catWalk,50);



// Bonus 1: 

const img=document.getElementsByTagName('img')[0];

img.style.left='0px';

const catWalk=()=>{
    const oldLeft= parseInt(img.style.left);
    const newLeft = oldLeft + 10;
    img.style.left = newLeft + 'px';

    if (img.style.left===`${window.innerWidth}px`) {
        img.style.left='0px';
    }
}

setInterval(catWalk,50);



// Bonus 2: Not finished

// const img=document.getElementsByTagName('img')[0];

// let left = parseInt(img.style.left);

// left = 0;

// let direction='right';

// const catWalk=()=>{
//     if (left<=300) {
//         left+=10;
//     } else {
//         left-=50;
//     }
//     img.style.left=`${left}px`;
// }

// setInterval(catWalk,50);