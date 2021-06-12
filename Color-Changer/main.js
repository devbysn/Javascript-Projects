//Choose a random color
const button = document.getElementsByClassName("blue-btn");
const body = document.querySelector("body");

function changeBackground() {
  var r = parseInt(Math.floor(Math.random() * 255));
  var g = parseInt(Math.floor(Math.random() * 255));
  var b = parseInt(Math.floor(Math.random() * 255));
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

Anchor.addEventListener("click", changeBackground, false);

// const button = document.getElementsByClassName(btn);;

// function setColor(){
//     var r = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);

//     addEventListener
//     document.body.style.backgroundColor = "red";
// }

// setColor();

// document.addEventListener("click", function(){

//     var r = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);

//     document.addEventListener
//     document.body.style.backgroundColor = "red";
//   });
