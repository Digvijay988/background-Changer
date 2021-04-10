var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var ClickMe = document.querySelector(".btn");
var paint = document.querySelector(".color");

ClickMe.addEventListener("click", function () {
  var hexColor = "#";

  for (var i = 0; i < 6; i++) {
    var RandomNumber = RandomColor();
    hexColor = hexColor + hex[RandomNumber];
  }
  paint.innerHTML = hexColor;
  document.querySelector("body").style.backgroundColor = hexColor;
});

function RandomColor() {
  return Math.floor(Math.random() * hex.length);
}