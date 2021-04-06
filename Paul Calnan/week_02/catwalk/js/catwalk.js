
const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
let walkForwards = true;

function catWalk() {
  let currentPos = parseInt(img.style.left);//current screen pos

  if (walkForwards && (currentPos > (window.innerWidth+20))) {//checks if img is 20px outside of the
    walkForwards = false;                               //screen width before reversing -(!walkForwards)
  }
  if (!walkForwards && (currentPos <= (0))) {//reverse walkForwards above - till px is zero
    walkForwards = true;
    img.style.transform = 'scaleX(+1)';//flips image (scale along x)
  }

  if (walkForwards) {
    img.style.left = (currentPos + 10) + 'px';//adds current left int + pix (speed)
  } else {
    img.style.left = (currentPos - 10) + 'px';//adds current left int + pix (speed)
    img.style.transform = 'scaleX(-1)';//flips image (scale along x)
  }

}
window.setInterval(catWalk, 50);
