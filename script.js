// var colors = [
//   "rgb(255, 0, 0)",
//   "rgb(0, 225, 0)",
//   "rgb(0, 0, 225)",
//   "rgb(255, 225, 0)",
//   "rgb(255, 0, 225)",
//   "rgb(0, 225, 225)",
// ];


var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButt = document.getElementById("reset");
var easyButt = document.getElementById("easyBtn");
var hardButt = document.getElementById("hardBtn");
var numSquares = 6

var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

var squares = document.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++) {
  //  initial colors
  squares[i].style.backgroundColor = colors[i];

  // event listeners
  squares[i].addEventListener("click", function () {
    // clicked color
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      changeColors(pickedColor);
      message.textContent = "Correct!";
      resetButt.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor() {
  // random no.
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButt.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    //  initial colors
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  message.textContent = ""
});

easyButt.addEventListener("click", function () {
  easyButt.classList.add("selected");
  hardButt.classList.remove("selected");
  numSquares = 3
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
});

hardButt.addEventListener("click", function () {
  hardButt.classList.add("selected");
  easyButt.classList.remove("selected");
  numSquares = 6
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "steelblue";
});
