console.log("this thing on?");

const img = document.getElementById('kitty1')
img.style.position = 'absolute';
img.style.left = '0px';

const catSlide = function() {
  const oldSide = parseInt(img.style.left);
  const newSide = oldSide + 6;
  img.style.left = newSide + 'px';
};
window.setInterval(catSlide, 50);
