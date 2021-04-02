const cat = document.getElementsByTagName('img')[0];
cat.style.position = 'absolute';
cat.style.left = '0px';
const watchKittyWalk = function() {
  const oldLeft = parseInt(cat.style.left);
  const newLeft = oldLeft + 10;
  cat.style.left = newLeft + 'px';

};
setInterval(watchKittyWalk, 50);
