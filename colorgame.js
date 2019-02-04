
var colors = [];
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

//to initialize a code when page load rather than when its enacted
init();

function init(){
	//c;ean up your code by calling individual functions 
	setUpModeButtons();
		setUpSquares();
		reset();

}
 function setUpModeButtons(){
 	for( var i = 0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares= 6;
		 reset();
		//if(this.textContent === "Easy"){
		//	numOfSquares =3;
		//	}else( numOfSquares = 6;)
		//how many squares to show
		//pick new colors
		//pick new pickedColor
		//update page to reflect changes
	});
	}
 }
  function setUpSquares(){
  	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	//squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
  }
function reset(){
 colors = generateRandomColors(numOfSquares);
	//pick a new random color display
	pickedColor=pickColor();
	//change colorDisplay to match
	messageDisplay.textContent= "";
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background =colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
/*	
easybtn.addEventListener("click", function(){
hardbtn.classList.remove("selected");
easyBtn.classList.add("selected");
numOfSquares = 3;
colors =generateRandomColors(numOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i= 0;i < squares.length; i++){
if(colors[i]){ 
 squares[i].style.background = colors[i];
}else {
	squares[i].style.display ="none";
} 
}
});

hardBtn.addEventListener("click", function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numOfSquares = 6;
colors =generateRandomColors(numOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
 for (var i= 0;i < squares.length; i++){
 squares[i].style.background = colors[i];
 squares[i].style.display ="block";
}
});
*/
resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	//squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

