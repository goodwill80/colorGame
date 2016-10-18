var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for ( var i = 0; i < colors.length; i++ ) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "That's correct!";
        changeColors(clickedColor);
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
