var colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

var clickMe = document.querySelector(".btn");
var paint = document.querySelector(".color");

clickMe.addEventListener("click", function () {
    var RandomNumber = RandomColor();
    document.querySelector("body").style.backgroundColor = colors[RandomNumber];
    paint.innerHTML = colors[RandomNumber];

});

function RandomColor() {
    return Math.floor(Math.random() * colors.length);
}