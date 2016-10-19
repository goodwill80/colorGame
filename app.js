var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares  );
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

colorDisplay.textContent = pickedColor;

easy.addEventListener("click", function(){
  this.classList.add("selected");
  hard.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
    messageDisplay.textContent = " ";
});

hard.addEventListener("click", function(){
  this.classList.add("selected");
  easy.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    }
  }
    messageDisplay.textContent = " ";
})

reset.addEventListener("click", function(){
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  messageDisplay.textContent = " ";
  h1.style.background = "steelblue";
  reset.textContent = "New Colors";
});

for ( var i = 0; i < colors.length; i++ ) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "That's correct!";
        h1.style.background = pickedColor;
        changeColors(clickedColor);
        reset.textContent = "Play again!";
    } else {
      this.style.background = "#232324";
      messageDisplay.textContent = "Try again!";
    }
});
};

function changeColors (color) {
for ( var i = 0; i < squares.length; i++ ) {
  squares[i].style.background = color;
}
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++ ){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  //pick a red from 0 - 255;
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255;
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255;
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
