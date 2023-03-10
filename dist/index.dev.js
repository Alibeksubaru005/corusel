"use strict";

var carusel = document.querySelector(".carusel");
var leftbtn = document.querySelector("#left");
var rigthbtn = document.getElementById("rigth");
var img = document.querySelectorAll(".carusel img");
console.log(img);
var idx = 0;

function changeImg() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  carusel.style.transform = "translateX( ".concat(-idx * 500, "px ) ");
} // rigthbtn.addEventListener('click',changeImg)


rigthbtn.addEventListener('click', function change() {
  idx++;
  changeImg();
  console.log(idx);
});
leftbtn.addEventListener('click', function change() {
  idx--;
  changeImg();
  console.log(idx);
});
//# sourceMappingURL=index.dev.js.map
