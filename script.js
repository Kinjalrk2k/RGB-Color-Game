var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButt = document.getElementById("reset");
var modeButts = document.querySelectorAll(".mode");
var numSquares = 6;

var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

var squares = document.querySelectorAll(".square");

for (var i = 0; i < modeButts.length; i++) {
  modeButts[i].addEventListener("click", function () {
    modeButts[0].classList.remove("selected");
    modeButts[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
    reset();
  });
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
  resetButt.textContent = "New Colors!";
}

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
  reset();
});
