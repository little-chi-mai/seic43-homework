//Catwalk

const catWalk = function() {
  const img = document.getElementsByTagName('img')[0];
  let p = img.style.marginLeft;
      p = parseFloat(p);
      img.style.marginLeft = p + 10 + 'px';
};
setInterval(catWalk, 50);
