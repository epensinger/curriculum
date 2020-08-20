//pick 6 random colors
//var colors = ["rgb(255, 0, 0)", 
//    "rgb(255, 255, 0)",
//    "rgb(0, 255, 0)",
//    "rgb(0, 255, 255)",
//    "rgb(0, 0, 255)",
//    "rgb(255, 0, 255)"
//] // array of colors
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#restart");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // } this is the if statement replaced by the ternary operator above.
            reset();
        });
    }   

    for(var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}


function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
        //change text back to New Colors
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change the colors of the squares on the page
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){    
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    //change the background of h1
    h1.style.backgroundColor = "steelblue";

}
//refactored out
//easyBtn.addEventListener("click", function() {
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numSquares = 3;
//    //generate 3 random colors - working
//    colors = generateRandomColors(numSquares);
    //pick one of the colors and update the colorDisplay - working
//      pickedColor = pickColor();
//      colorDisplay.textContent = pickedColor;
//    //update colors of 1st 3 squares and hide last 3
//    //loops through all 6 squares --working
//    for(var i = 0; i < squares.length; i++) {  
//        //if there is a color, change it, but since there are only 3...
//        if(colors[i]){    
//            squares[i].style.backgroundColor = colors[i];
//            squares[i].style.display = "block";
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
//
//});

//hardBtn.addEventListener("click", function() {
//    easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    //generate 6 random colors - working
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    //pick one of the colors and update the colorDisplay - working
//      pickedColor = pickColor();
//      colorDisplay.textContent = pickedColor;
//    //update colors and make sure there are 6
//    //loops through all 6 squares --working
//    for(var i = 0; i < squares.length; i++) {   
//            squares[i].style.backgroundColor = colors[i];
//            squares[i].style.display = "block";
//    }
//
//});


resetButton.addEventListener("click", function() {
    reset();
})



//changes the colors of the squares to a given color
function changeColors(color) {
    //loop through all squares
    for(var i = 0; i <squares.length; i++) {
        //change each color to match a given color
        squares[i].style.backgroundColor = color;
    }

}

//returns a random number for the index of the square
function pickColor(){
    //pick a random number for the square index
    console.log(colors.length);
    var random = Math.floor(Math.random() * colors.length); 
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255;
    let red = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255;
    let blue = Math.floor(Math.random()* 256);
    //pick a "green" from 0 to 255;
    let green = Math.floor(Math.random() * 256);
    return "rgb("+red+", "+blue+", "+green+")";
}